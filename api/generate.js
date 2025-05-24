const axios = require('axios');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // Enhance the prompt with additional parameters for better results
        const enhancedPrompt = `${prompt}, high quality, detailed, professional photography, 8k resolution, trending on artstation`;

        // Encode the prompt for the URL
        const encodedPrompt = encodeURIComponent(enhancedPrompt);
        
        // Generate the image URL
        const imageUrl = `http://ai.pollinations.ai/prompt/${encodedPrompt}`;

        // Return the image URL
        return res.status(200).json({ imageUrl });
    } catch (error) {
        console.error('Error generating image:', error);
        return res.status(500).json({ error: 'Failed to generate image' });
    }
}; 
