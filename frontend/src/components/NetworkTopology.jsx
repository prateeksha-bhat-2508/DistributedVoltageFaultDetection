import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

export default function NetworkTopology({ nodesData }) {

  const flowNodes = [];
  const flowEdges = [];

  nodesData.forEach((node, index) => {

    flowNodes.push({
      id: node.id,
      data: {
        label: `${node.id}\n${node.faultType}`
      },
      position: {
        x: (index % 4) * 250,
        y: Math.floor(index / 4) * 150
      },
      style: {
        background:
node.status === "CRITICAL"
? "#ef4444"

: node.status === "WARNING"
? "#facc15"

: "#22c55e",
        color: "white",
        width: 180
      }
    });

    flowEdges.push({
      id: `edge-${node.id}`,
      source: node.id,
      target: "mec"
    });
  });

  flowNodes.push({
    id: "mec",
    data: {
      label: "MEC Server"
    },
    position: {
      x: 350,
      y: 550
    },
    style: {
      background: "#2563eb",
      color: "white",
      width: 220
    }
  });

  return (
    <div
      style={{
        height: "700px",
        border: "1px solid #ddd"
      }}
    >
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        fitView
      />
    </div>
  );
}