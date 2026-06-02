from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from event_store import get_events
from routes import process_reading

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "project":
        "Distributed Fault Detection System"
    }

@app.get("/live")
def live_data():
    return process_reading()

@app.get("/events")
def events():

    return get_events()