import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function kimiApiPlugin() {
  let envApiKey;
  return {
    name: 'kimi-api',
    config(_, { mode }) {
      const env = loadEnv(mode, process.cwd(), '');
      envApiKey = env.KIMI_API_KEY;
    },
    configureServer(server) {
      server.middlewares.use('/api/search', async (req, res) => {
        if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          res.end();
          return;
        }
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        // Read request body
        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);
        const body = JSON.parse(Buffer.concat(chunks).toString());
        const query = body.query;

        if (!query || !query.trim()) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Missing query' }));
          return;
        }

        const apiKey = envApiKey;
        if (!apiKey) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'KIMI_API_KEY not set in .env.local' }));
          return;
        }

        const prompt = `关键词：「${query}」。找4位相关历史思想者，按出生年排列，覆盖东西方古今。返回JSON数组：
[{"name":"中文名","nameEn":"英文名","birthYear":数字,"era":"生卒","category":"哲学家/作家/科学家/诺贝尔奖得主/思想大成者/近代学者","tradition":"传统","color":"#2980b9或#d4a017或#8b6cc9或#27ae60或#c0392b或#e67e22","topic":"话题","quote":"「名言」","insight":"1句现代洞察"}]`;

        try {
          const response = await fetch('https://api.moonshot.cn/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: 'moonshot-v1-8k',
              messages: [
                { role: 'system', content: '你是人文思想数据库。只返回JSON数组，不加任何其他文字。' },
                { role: 'user', content: prompt },
              ],
              temperature: 0.7,
              max_tokens: 1200,
            }),
          });

          if (!response.ok) {
            const err = await response.text();
            console.error('Kimi API error:', err);
            res.statusCode = 502;
            res.end(JSON.stringify({ error: 'AI service error' }));
            return;
          }

          const data = await response.json();
          const text = data.choices?.[0]?.message?.content || '';
          const jsonMatch = text.match(/\[[\s\S]*\]/);

          if (!jsonMatch) {
            console.error('Failed to parse AI response:', text);
            res.statusCode = 502;
            res.end(JSON.stringify({ error: 'Invalid AI response' }));
            return;
          }

          const results = JSON.parse(jsonMatch[0]);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ results }));
        } catch (err) {
          console.error('Server error:', err);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Internal server error' }));
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), kimiApiPlugin()],
})
