export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { query } = req.body;
  if (!query || !query.trim()) {
    return res.status(400).json({ error: 'Missing query' });
  }

  const apiKey = process.env.KIMI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'KIMI_API_KEY not configured' });
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
      return res.status(502).json({ error: 'AI service error' });
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || '';

    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      console.error('Failed to parse AI response:', text);
      return res.status(502).json({ error: 'Invalid AI response' });
    }

    const results = JSON.parse(jsonMatch[0]);
    return res.status(200).json({ results });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
