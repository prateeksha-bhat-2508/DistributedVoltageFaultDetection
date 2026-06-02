import json
import time
import random
import paho.mqtt.client as mqtt

from simulated_node import get_random_reading

client = mqtt.Client()

client.connect("localhost", 1883, 60)

while True:

    for i in range(1, 51):

        payload = {
            "nodeId": f"Node-{i}",
            **get_random_reading()
        }

        client.publish(
            "grid/telemetry",
            json.dumps(payload)
        )

    print("Published 50 node readings")

    time.sleep(2)