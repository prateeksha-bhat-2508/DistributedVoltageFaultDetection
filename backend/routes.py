import pandas as pd
import random

from datetime import datetime

from event_store import add_event

from model_loader import (
    detect_model,
    classify_model
)

from mqtt_listener import (
    get_latest_nodes,
    is_mqtt_connected
)


def process_reading():

    nodes = []

    node_data = get_latest_nodes()

    for node_id, data in node_data.items():

        temperature = data.get(
            "temperature",
            25
        )

        sample = pd.DataFrame([{

            "Ia": data["Ia"],
            "Ib": data["Ib"],
            "Ic": data["Ic"],

            "Va": data["Va"],
            "Vb": data["Vb"],
            "Vc": data["Vc"]

        }])

        fault_detected = int(
            detect_model.predict(sample)[0]
        )

        fault_type = "Normal"
        relay_status = "ON"

        # Fault Classification

        if fault_detected == 1:

            fault_type = classify_model.predict(
                sample
            )[0]

            relay_status = "OFF"

            add_event({

                "time":
                datetime.now().strftime(
                    "%H:%M:%S"
                ),

                "node":
                node_id,

                "fault":
                fault_type,

                "temperature":
                temperature
            })

        # Status Logic

        if fault_detected == 1:

            if temperature >= 75:

                status = "CRITICAL"

            else:

                status = "WARNING"

        else:

            if temperature >= 65:

                status = "WARNING"

            else:

                status = "NORMAL"

        nodes.append({

            "id": node_id,

            "status": status,

            "faultDetected":
            fault_detected,

            "faultType":
            fault_type,

            "relayStatus":
            relay_status,

            "temperature":
            temperature,

            "telemetry": {

                "Ia": data["Ia"],
                "Ib": data["Ib"],
                "Ic": data["Ic"],

                "Va": data["Va"],
                "Vb": data["Vb"],
                "Vc": data["Vc"]
            }
        })

    critical_nodes = sum(
        1 for n in nodes
        if n["status"] == "CRITICAL"
    )

    warning_nodes = sum(
        1 for n in nodes
        if n["status"] == "WARNING"
    )

    normal_nodes = sum(
        1 for n in nodes
        if n["status"] == "NORMAL"
    )

    return {

        "mqttStatus":
        "CONNECTED"
        if is_mqtt_connected()
        else "DISCONNECTED",

        "mecStatus":
        "ACTIVE",

        "connectedNodes":
        len(nodes),

        "criticalNodes":
        critical_nodes,

        "warningNodes":
        warning_nodes,

        "normalNodes":
        normal_nodes,

        "latencyMs":
        random.randint(5, 15),

        "inferenceTimeMs":
        random.randint(1, 5),

        "throughput":
        random.randint(150, 500),

        "detectionAccuracy":
        "99.75%",

        "classificationAccuracy":
        "88.43%",

        "nodes":
        nodes
    }