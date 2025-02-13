import React, { useState } from "react";
import axios from "axios";

function Chatbot() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/chatbot/chat", { userQuery: query });
      setResponse(res.data.reply);
    } catch (error) {
      setResponse("Sorry, there was an error.");
    }
  };

  return (
    <div>
      <h1>Chat with our Bot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask something..."
        />
        <button type="submit">Send</button>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default Chatbot;

