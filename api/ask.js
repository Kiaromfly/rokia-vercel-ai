export default async function handler(req, res) {
  // ✅ CORS headers
  res.setHeader("Access-Control-Allow-Origin", "https://rokialtd.com"); // o "*" solo per test
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // ✅ Gestione preflight (CORS)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ✅ Assicurati che il corpo sia JSON
  if (!req.body || typeof req.body !== 'object') {
    return res.status(400).json({ error: "Corpo richiesta non valido o mancante." });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt mancante." });
  }

  // 🧠 Qui andrebbe la logica AI (chiamata al backend o Ollama)
  const risposta = `Hai scritto: "${prompt}". Risposta generica di test.`;

  return res.status(200).json({ response: risposta });
}
