import axios from 'axios';

export default async function handler(req, res) {
    const { prompt } = req.query;
  
    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({ error: "Prompt is required" });
    }
  
    const imageUrl = `http://pollinations.ai/prompt/${encodeURIComponent(prompt)}`;
  
    // Don't fetch the image — just send the URL
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ imageUrl });
  }
  
