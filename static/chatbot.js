// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent form submission

  const input = inputField.value.trim();
  if (!input) return;

  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let userMessage = document.createElement('div');
  userMessage.classList.add('chatbot-message', 'user-message');
  userMessage.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(userMessage);

  // Show typing message from bot
  let botMessage = document.createElement('div');
  botMessage.classList.add('chatbot-message', 'chatbot');
  botMessage.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">Typing...</p>`;
  conversation.appendChild(botMessage);
  botMessage.scrollIntoView({ behavior: "smooth" });

  // Send user input to backend and get Gemini response
  try {
    const response = await fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await response.json();
    botMessage.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${data.response}</p>`;
  } catch (error) {
    botMessage.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">❌ Error: Failed to connect to Gemini backend</p>`;
  }
});

// Clear conversation and reset chat
async function clearChat() {
  try {
    await fetch('http://localhost:8000/clear', { method: 'POST' });
    conversation.innerHTML = '';
    const msg = document.createElement('div');
    msg.classList.add('chatbot-message', 'chatbot');
    msg.innerHTML = `<p class="chatbot-text">🔄 New chat started. How can I help you?</p>`;
    conversation.appendChild(msg);
  } catch (error) {
    alert("❌ Couldn't reset chat session.");
  }
}

// Optional: Alert when switching tabs
window.onblur = function () {
  alert('Trying to switch tabs, eh!');
};
