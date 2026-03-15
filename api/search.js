export default async function handler(req, res) {
  // CORS
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

  const prompt = `你是一个人文思想数据库。用户搜索了关键词：「${query}」

请找出 3-6 位与这个主题最相关的历史思想者（哲学家、作家、科学家、政治家等均可），为每位思想者生成一条回应。

要求：
1. 优先选择真实存在的、有代表性的思想者
2. 引用尽量使用其真实的名言原文（中文或翻译）
3. insight 用现代中文写，简洁有洞察力，1-2句话
4. 覆盖不同时代和文明（东方/西方、古代/现代）
5. 按出生年份从早到晚排列

严格按以下 JSON 格式返回，不要添加任何其他文字：
[
  {
    "name": "思想者中文名",
    "nameEn": "English Name",
    "birthYear": 出生年份数字（公元前用负数，如-551）,
    "era": "生卒年代",
    "category": "类别（哲学家/作家/科学家/诺贝尔奖得主/思想大成者/近代学者）",
    "tradition": "所属传统",
    "color": "代表色hex（希腊蓝#2980b9/儒家金#d4a017/道佛紫#8b6cc9/科学绿#27ae60/存在红#c0392b/基督橙#e67e22）",
    "topic": "与搜索词相关的话题名",
    "quote": "「真实引用原文」",
    "insight": "用现代语言解读这位思想者对此话题的核心洞察"
  }
]`;

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
          { role: 'system', content: '你是一个人文思想数据库，严格按用户要求的 JSON 格式返回结果，不要添加任何其他文字。' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Kimi API error:', err);
      return res.status(502).json({ error: 'AI service error' });
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || '';

    // Extract JSON from response (handle markdown code blocks)
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
