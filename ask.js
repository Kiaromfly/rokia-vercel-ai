export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { prompt } = req.body;

  try {
    const response = await fetch("https://ai.rokialtd.com/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer RokiaLab-2025-ACCESS"
      },
      body: JSON.stringify({ prompt })
    });

    const result = await response.json();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Errore interno", detail: error.message });
  }
}
