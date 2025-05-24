import axios from 'axios';

export default async function handler(req, res) {
  const { prompt } = req.query;

  if (!prompt || prompt.trim() === "") {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const imageUrl = `http://ai.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

  try {
    // Ping the image URL to make sure it's reachable
    await axios.get(imageUrl, { responseType: 'arraybuffer' });

    // Return the image URL to frontend
    res.status(200).json({ imageUrl });
  } catch (err) {
    console.error("Pollinations API error:", err.message);
    res.status(500).json({ error: "Failed to fetch image from Pollinations" });
  }
}
