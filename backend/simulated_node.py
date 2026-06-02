import pandas as pd
import random

df = pd.read_csv("../dataset/classData.csv")

def get_random_reading():

    row = df.sample(1).iloc[0]

    avg_current = (
        abs(float(row["Ia"])) +
        abs(float(row["Ib"])) +
        abs(float(row["Ic"]))
    ) / 3

    temperature = round(
        min(85, 25 + avg_current * 0.2),
        1
    )

    return {
        "Ia": float(row["Ia"]),
        "Ib": float(row["Ib"]),
        "Ic": float(row["Ic"]),
        "Va": float(row["Va"]),
        "Vb": float(row["Vb"]),
        "Vc": float(row["Vc"]),
        "temperature": temperature
    }
    