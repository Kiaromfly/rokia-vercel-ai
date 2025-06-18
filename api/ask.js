export default async function handler(req, res) {
  // ✅ Intestazioni CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Risposta immediata alle richieste preflight OPTIONS
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ✅ Solo POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Solo POST consentito" });
  }

  // ✅ Parsing del body
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt mancante" });
  }

  // 🔄 Qui puoi sostituire con la logica di Ollama/Mistral se vuoi
  const response = `Risposta a: ${prompt}`;

  return res.status(200).json({ response });
}
