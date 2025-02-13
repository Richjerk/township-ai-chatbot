async function sendMessage() {
  const input = document.getElementById("chatbot-input");
  const messages = document.getElementById("chatbot-messages");
  const userMessage = input.value;

  if (userMessage.trim()) {
    messages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    input.value = ""; // Clear input

    try {
      const response = await fetch("curl \
  -H "Content-Type: application/json" \
  -d "{\"contents\":[{\"parts\":[{\"text\":\"Explain how AI works\"}]}]}" \
  -X POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBu29op0LemGPSu3adIzZCF9SS-ecngRM4"
", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      messages.innerHTML += `<p><strong>Chatbot:</strong> ${data.reply}</p>`;
    } catch (error) {
      console.error("Error communicating with chatbot API:", error);
      messages.innerHTML += `<p><strong>Chatbot:</strong> Sorry, something went wrong!</p>`;
    }

    messages.scrollTop = messages.scrollHeight; // Auto-scroll
  }
}

