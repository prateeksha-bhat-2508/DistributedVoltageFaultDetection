import { useEffect, useState } from "react";
import axios from "axios";

import BuildingView from "../components/BuildingView";
import NodeStatusModal from "../components/NodeStatusModal";
import LogModal from "../components/LogModal";

export default function Dashboard() {

const [data, setData] = useState(null);
const [events, setEvents] = useState([]);

const [showNodes, setShowNodes] = useState(false);
const [showLogs, setShowLogs] = useState(false);

useEffect(() => {

const fetchData = async () => {

  try {

    const response =
      await axios.get(
        "http://127.0.0.1:8000/live"
      );

    setData(response.data);

    const eventsResponse =
      await axios.get(
        "http://127.0.0.1:8000/events"
      );

    setEvents(eventsResponse.data);

  } catch (err) {

    console.log(err);

  }
};

fetchData();

const interval =
  setInterval(fetchData, 3000);

return () =>
  clearInterval(interval);

}, []);

if (!data)
  return <h1>Loading...</h1>;

const cardStyle = {

background:
  "rgba(255,255,255,0.08)",

backdropFilter:
  "blur(12px)",

border:
  "1px solid rgba(255,255,255,0.12)",

borderRadius: "18px",

padding: "24px",

textAlign: "center",

boxShadow:
  "0 8px 30px rgba(0,0,0,0.25)",

transition:
  "all 0.3s ease"

};

const buttonStyle = {

background:
  "linear-gradient(90deg,#7c3aed,#3b82f6)",

color: "white",

border: "none",

borderRadius: "12px",

padding: "12px 22px",

fontWeight: "bold",

cursor: "pointer",

boxShadow:
  "0 0 20px rgba(124,58,237,0.4)"

};

return (

<div
  style={{

    background:
      "linear-gradient(135deg,#0f172a,#1e1b4b,#312e81)",

    minHeight: "100vh",

    color: "white",

    padding: "30px",

    fontFamily:
      "Inter, Arial, sans-serif"
  }}
>

  <div
    style={{

      display: "flex",

      justifyContent:
        "space-between",

      alignItems: "center",

      flexWrap: "wrap",

      gap: "20px",

      marginBottom: "30px"
    }}
  >

    <div>

      <h1
        style={{

          fontSize: "2.5rem",

          fontWeight: "700",

          margin: 0,

          color: "#f8fafc"
        }}
      >
        Distributed & Resilient
        Monitoring System
      </h1>

      <p
        style={{
          color:"#cbd5e1",
          marginTop:"8px"
        }}
      >
        Low Voltage Distribution
        Network Monitoring
      </p>

    </div>

    <div
      style={{
        display:"flex",
        gap:"12px"
      }}
    >

      <button
        style={buttonStyle}
        onClick={() =>
          setShowNodes(true)
        }
      >
        Node Status
      </button>

      <button
        style={buttonStyle}
        onClick={() =>
          setShowLogs(true)
        }
      >
        Log Files
      </button>

    </div>

  </div>

  <div
    style={{

      display: "grid",

      gridTemplateColumns:
        "repeat(auto-fit,minmax(220px,1fr))",

      gap: "18px",

      marginBottom: "25px"
    }}
  >

    <div style={cardStyle}>
      <h3>MEC Status</h3>
      <h2>{data.mecStatus}</h2>
    </div>

    <div style={cardStyle}>
      <h3>MQTT Status</h3>
      <h2>{data.mqttStatus}</h2>
    </div>

    <div style={cardStyle}>
      <h3>Connected Nodes</h3>
      <h2>{data.connectedNodes}</h2>
    </div>

    <div style={cardStyle}>
      <h3>Critical Nodes</h3>
      <h2>{data.criticalNodes}</h2>
    </div>

    <div style={cardStyle}>
      <h3>Warning Nodes</h3>
      <h2>{data.warningNodes}</h2>
    </div>

    <div style={cardStyle}>
      <h3>Latency</h3>
      <h2>{data.latencyMs} ms</h2>
    </div>

    <div style={cardStyle}>
      <h3>Inference Time</h3>
      <h2>{data.inferenceTimeMs} ms</h2>
    </div>

    <div style={cardStyle}>
      <h3>Throughput</h3>
      <h2>{data.throughput}</h2>
    </div>

    <div style={cardStyle}>
      <h3>Fault Ratio</h3>

      <h2>
        {Math.round(
          (
            data.criticalNodes /
            Math.max(
              data.connectedNodes,
              1
            )
          ) * 100
        )}
        %
      </h2>

    </div>

  </div>

  <BuildingView
    nodes={data.nodes}
  />

  {showNodes &&

    <NodeStatusModal

      nodes={data.nodes}

      onClose={() =>
        setShowNodes(false)
      }

    />
  }

  {showLogs &&

    <LogModal

      events={events}

      onClose={() =>
        setShowLogs(false)
      }

    />
  }

  <div
    style={{

      textAlign:"center",

      marginTop:"25px",

      color:"#cbd5e1"
    }}
  >

    MQTT Broker • MEC Edge Server •
    Random Forest Detection •
    Fault Classification •
    50 Virtual Nodes

  </div>

</div>

);
}