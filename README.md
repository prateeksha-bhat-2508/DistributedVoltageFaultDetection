# A Distributed and Resilient Monitoring System for Fault Detection in Low-Voltage Distribution Networks

## Overview

This project implements a distributed fault monitoring and detection system for low-voltage electrical distribution networks. The system simulates multiple edge nodes generating electrical telemetry data, performs machine learning based fault detection and classification at the edge layer, and visualizes network health through a real-time monitoring dashboard.

The architecture follows an Edge Computing paradigm where sensor nodes publish telemetry through MQTT, edge services perform inference, and the frontend dashboard provides operational visibility.

---

## Features

### Monitoring Features

* Real-time telemetry monitoring
* 50 virtual distribution nodes
* Node health visualization
* Building-wise network topology
* Temperature monitoring
* Relay status monitoring

### Machine Learning Features

* Fault Detection Model
* Fault Classification Model
* Real-time inference
* Fault event generation
* Detection accuracy reporting
* Classification accuracy reporting

### Distributed System Features

* MQTT communication
* Edge Computing architecture
* Event logging
* Live node updates
* Distributed telemetry collection

### Dashboard Features

* Real-time KPI cards
* Building-based digital twin visualization
* Node status modal
* Event log modal
* Network health indicators
* Throughput and latency metrics

---

## Technology Stack

| Layer              | Technology        |
| ------------------ | ----------------- |
| Frontend           | React.js          |
| Build Tool         | Vite              |
| Backend            | FastAPI           |
| Machine Learning   | Scikit-Learn      |
| Data Processing    | Pandas            |
| Messaging Protocol | MQTT              |
| MQTT Broker        | Eclipse Mosquitto |
| Language           | Python            |
| Version Control    | Git               |
| Deployment Ready   | GitHub            |

---

## Project Structure

| Directory | Description                        |
| --------- | ---------------------------------- |
| dataset/  | Training datasets                  |
| models/   | Trained ML models                  |
| ml/       | Model training scripts             |
| backend/  | FastAPI backend services           |
| frontend/ | React frontend                     |
| reports/  | Evaluation results and screenshots |

### Detailed Structure

```text
ProjectWork6thSem/

├── dataset/
│   ├── classData.csv
│   └── detect_dataset.csv
│
├── models/
│   ├── fault_detection_model.pkl
│   └── fault_classifier_model.pkl
│
├── ml/
│   ├── train_detection.py
│   ├── train_classifier.py
│   ├── predict.py
│   └── evaluate.py
│
├── backend/
│   ├── app.py
│   ├── routes.py
│   ├── model_loader.py
│   ├── mqtt_listener.py
│   ├── mqtt_publisher.py
│   ├── simulated_node.py
│   └── event_store.py
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── reports/
│
└── README.md
```

---

## Machine Learning Models

### Fault Detection Model

Purpose:

* Detect whether a fault exists in the network.

Input Features:

* Ia
* Ib
* Ic
* Va
* Vb
* Vc

Output:

* Fault
* No Fault

Performance:

* Accuracy: 99.75%

---

### Fault Classification Model

Purpose:

* Identify fault category after fault detection.

Classes:

* No Fault
* LG Fault
* LL Fault
* LLG Fault
* LLL Fault
* LLLG Fault

Performance:

* Accuracy: 88.43%

---

## System Workflow

```text
Sensor Node
     |
     v
MQTT Publisher
     |
     v
Mosquitto Broker
     |
     v
MQTT Listener
     |
     v
FastAPI Backend
     |
     +--> Fault Detection
     |
     +--> Fault Classification
     |
     +--> Event Logging
     |
     v
React Dashboard
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd ProjectWork6thSem
```

---

### Backend Setup

```bash
pip install fastapi
pip install uvicorn
pip install pandas
pip install scikit-learn
pip install paho-mqtt
pip install joblib
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm install axios
```

---

### Install MQTT Broker

Install Eclipse Mosquitto:

https://mosquitto.org/download/

---

## Running the Project

### Step 1 - Start Mosquitto Broker

```bash
cd D:\Mosquitto

.\mosquitto.exe
```

---

### Step 2 - Start Backend

```bash
cd backend

uvicorn app:app --reload
```

---

### Step 3 - Start MQTT Publisher

```bash
cd backend

python mqtt_publisher.py
```

---

### Step 4 - Start Frontend

```bash
cd frontend

npm run dev
```

---

## API Endpoints

### Get Live System Data

```http
GET /live
```

---

### Get Event Logs

```http
GET /events
```

---

## Future Enhancements

* InfluxDB integration
* Grafana dashboards
* Real IoT sensor deployment
* Docker deployment
* Kubernetes orchestration
* Cloud edge deployment
* Historical analytics
* Predictive maintenance

## Dashboard Preview

### KPI Dashboard

<img src="reports/screenshots/cards.png" width="700">

### Distribution Network Digital Twin

<img src="reports/screenshots/buildings.png" width="700">

### Node Status Monitoring

<img src="reports/screenshots/nodes.png" width="700">

### Event Log Monitoring

<img src="reports/screenshots/eventlogs.png" width="700">

---

## Authors

Prateeksha Bhat, Mridhini M, Rishika N S, Nikhita S P

Project Title:

A Distributed and Resilient Monitoring System for Fault Detection in Low-Voltage Distribution Networks
