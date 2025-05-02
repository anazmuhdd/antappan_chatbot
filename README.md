# 💬 Gemini Flash 2.0 Chatbot Web App

An interactive chatbot web application using Google's **Gemini 2.0 Flash** model integrated with a FastAPI backend and a modern HTML/CSS/JS frontend.

---

## Project Overview

This chatbot lets users type in messages and get AI-generated responses via Gemini 2.0 Flash. It supports:

*  Real-time chat with Gemini
*  Starting a new conversation
*  CORS-enabled backend
*  Simple JS frontend for easy integration

---

##  Project Structure

```
project-root/
│
├── backend/
│   ├── main.py               # FastAPI backend with Gemini integration
│   └── requirements.txt      # Python dependencies
│
├── static/
│   ├── index.html            # Frontend UI
│   ├── style.css             # Styling
│   └── script.js             # Chat logic + backend communication
│
├── README.md                 # You're here!
```

---

##  Setup Instructions

### Backend (FastAPI + Gemini)

1. **Clone the repo:**

   ```bash
   git clone https://github.com/your-username/gemini-chatbot.git
   cd gemini-chatbot
   ```

2. **Create virtual environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # For Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the FastAPI server:**

   ```bash
   uvicorn main:app --reload
   ```

>  Replace `YOUR_GEMINI_API_KEY` in `main.py` with your actual [Google AI Studio API Key](https://makersuite.google.com/).

---

##  Gemini Chat Features

*  Ask questions and get real-time answers
*  Start a new chat session
*  Backend built on FastAPI
*  Frontend built with HTML + CSS + JS
*  CORS-enabled for local development

---

##  API Endpoints

| Method | Endpoint | Description               |
| ------ | -------- | ------------------------- |
| POST   | `/chat`  | Sends a message to Gemini |
| POST   | `/clear` | Starts a new chat session |
| GET    | `/`      | Serves frontend index     |

---

##  Testing with Postman

1. URL: `http://localhost:8000/chat`
2. Method: `POST`
3. Body (raw JSON):

   ```json
   {
     "message": "Hello, how are you?"
   }
   ```
4. You should receive:

   ```json
   {
     "response": "Hi! I'm doing well. How can I assist you today?"
   }
   ```

---

## 🖥 Frontend (Static HTML)

* Send messages via a form.
* Render user and bot messages in chat bubbles.
* Typing indicator and chat clearing function.

---


---

##  Contributing

Pull requests and feedback are welcome! Please open an issue first to discuss major changes.

---

##  License

MIT License © 2025

---

##  Links

* Google Gemini: [https://ai.google.dev](https://ai.google.dev)
* FastAPI Docs: [https://fastapi.tiangolo.com](https://fastapi.tiangolo.com)
