import json
import paho.mqtt.client as mqtt

latest_nodes = {}
mqtt_connected = False

def get_latest_nodes():
    return latest_nodes

def is_mqtt_connected():
    return mqtt_connected

def on_connect(client, userdata, flags, rc):

    global mqtt_connected

    if rc == 0:
        mqtt_connected = True

        client.subscribe(
            "grid/telemetry"
        )

def on_message(client, userdata, msg):

    data = json.loads(
        msg.payload.decode()
    )

    latest_nodes[
        data["nodeId"]
    ] = data

client = mqtt.Client()

client.on_connect = on_connect
client.on_message = on_message

client.connect(
    "localhost",
    1883,
    60
)

client.loop_start()