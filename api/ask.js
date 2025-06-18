export default async function handler(req, res) {
  // ✅ CORS headers
  res.setHeader("Access-Control-Allow-Origin", "https://rokialtd.com"); // o "*" per test
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end(); // Preflight request
    return;
  }

  // ✅ Logica base dell'API
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt mancante." });
  }

  // Qui andrebbe la tua logica AI (es. chiamata al backend con Ollama)
  const risposta = `Hai scritto: "${prompt}". Risposta generica di test.`;

  res.status(200).json({ response: risposta });
}
