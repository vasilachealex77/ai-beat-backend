export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Doar POST este permis" });
  }

  const { genre, mood } = req.body;

  if (!genre || !mood) {
    return res.status(400).json({ error: "Genul și starea sunt obligatorii" });
  }

  const beat = `🎵 Beat generat pentru genul "${genre}" și starea "${mood}"`;

  res.status(200).json({ beat });
}
