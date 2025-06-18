export default async function handler(req, res) {
  // ✅ CORS headers
  res.setHeader("Access-Control-Allow-Origin", "https://rokialtd.com");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt mancante." });
  }

  const risposta = `Hai scritto: "${prompt}". Risposta generica di test.`;
  res.status(200).json({ response: risposta });
}
