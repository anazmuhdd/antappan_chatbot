from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai

app = FastAPI()

# Enable CORS for all domains (you can restrict it later)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve static files (CSS, JS)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Serve HTML templates
templates = Jinja2Templates(directory="templates")

# Gemini setup
genai.configure(api_key="YOUR_API")
model = genai.GenerativeModel("gemini-2.0-flash")

# Global chat session (in-memory)
chat_session = model.start_chat(history=[])

# Serve the frontend
@app.get("/", response_class=HTMLResponse)
async def get_chat_page(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


class Message(BaseModel):
    message: str

@app.post("/chat")
async def chat_endpoint(data: Message):
    response = chat_session.send_message(data.message)
    return {"response": response.text}

@app.post("/clear")
async def clear_chat():
    global chat_session
    chat_session = model.start_chat(history=[])
    return {"message": "Chat history cleared. New session started."}
