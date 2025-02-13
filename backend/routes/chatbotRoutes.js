const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/chat', async (req, res) => {
  const { userQuery } = req.body;

  try {
    const response = await axios.post('https://your-chatbot-api-url', {
      query: userQuery,
      apiKey: process.env.CHATBOT_API_KEY
    });

    res.json({ reply: response.data.reply });
  } catch (err) {
    res.status(500).json({ message: 'Error processing chatbot query.' });
  }
});

module.exports = router;

