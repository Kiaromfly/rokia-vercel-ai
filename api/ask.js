// File: /api/ask.js

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Gestione preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Prompt mancante o non valido" });
    }

    // Qui puoi integrare Mistral, Ollama o API di tua scelta
    // Simulazione risposta
    const risposta = `Risposta simulata a: "${prompt}"`;

    return res.status(200).json({ response: risposta });
  } catch (err) {
    console.error("Errore interno:", err);
    return res.status(500).json({ error: "Errore interno del server" });
  }
}
