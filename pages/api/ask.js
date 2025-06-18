// pages/api/ask.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non consentito. Usa POST." });
  }

  const { prompt } = req.body;

  try {
    const backendResponse = await fetch("http://91.99.175.12:8080/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await backendResponse.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Errore nella richiesta al backend:", error);
    return res.status(500).json({ error: "Errore nella richiesta al backend" });
  }
}
