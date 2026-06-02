from collections import deque

event_logs = deque(maxlen=100)

def add_event(event):
    event_logs.appendleft(event)

def get_events():
    return list(event_logs)