export default function BuildingView({ nodes }) {

  const buildings = {

    "Building A":
      nodes.slice(0, 16),

    "Building B":
      nodes.slice(16, 33),

    "Building C":
      nodes.slice(33, 50)
  };

  const getColor = (status) => {

    if (status === "CRITICAL")
      return "#ef4444";

    if (status === "WARNING")
      return "#facc15";

    return "#22c55e";
  };

  const countStatus = (nodes, status) =>
    nodes.filter(
      n => n.status === status
    ).length;

  return (

    <div
      style={{
        background:"#111827",
        padding:"30px",
        borderRadius:"20px",
        marginTop:"25px",
        boxShadow:
          "0 0 20px rgba(0,0,0,0.4)"
      }}
    >

      <h2
        style={{
          marginBottom:"15px"
        }}
      >
        Distribution Network Digital Twin
      </h2>

      <div
        style={{
          display:"flex",
          gap:"30px",
          marginBottom:"25px",
          fontWeight:"bold"
        }}
      >

        <div>🟢 Normal</div>

        <div>🟡 Warning</div>

        <div>🔴 Critical</div>

      </div>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap:"25px"
        }}
      >

        {Object.entries(buildings)
          .map(([name,nodes]) => (

          <div
            key={name}

            style={{

              background:"#1f2937",

              border:
                "2px solid #374151",

              borderRadius:"15px",

              padding:"20px",

              boxShadow:
                "0 0 15px rgba(0,0,0,0.35)"
            }}
          >

            <div
              style={{
                display:"flex",
                justifyContent:
                  "space-between",
                alignItems:"center"
              }}
            >

              <h3>{name}</h3>

              <div
                style={{
                  fontSize:"0.9rem",
                  color:"#9ca3af"
                }}
              >
                {nodes.length} Nodes
              </div>

            </div>

            <div
              style={{
                display:"flex",
                gap:"15px",
                marginBottom:"20px",
                flexWrap:"wrap"
              }}
            >

              <div>
                🟢 {countStatus(nodes,"NORMAL")}
              </div>

              <div>
                🟡 {countStatus(nodes,"WARNING")}
              </div>

              <div>
                🔴 {countStatus(nodes,"CRITICAL")}
              </div>

            </div>

            <div
              style={{
                borderTop:
                  "1px solid #374151",
                paddingTop:"15px"
              }}
            >

              <h4>
                Electrical Floor 1
              </h4>

              <div
                style={{
                  display:"grid",
                  gridTemplateColumns:
                    "repeat(4,1fr)",
                  gap:"10px"
                }}
              >

                {nodes
                  .slice(0,8)
                  .map(node => (

                  <div
                    key={node.id}

                    title={`
${node.id}
${node.status}
${node.temperature}°C
`}

                    style={{

                      background:
                        getColor(
                          node.status
                        ),

                      height:"40px",

                      borderRadius:"10px",

                      display:"flex",

                      justifyContent:
                        "center",

                      alignItems:
                        "center",

                      color:"black",

                      fontWeight:"bold"
                    }}
                  >
                    {node.id
                      .replace(
                        "Node-",
                        ""
                      )}
                  </div>

                ))}

              </div>

            </div>

            <div
              style={{
                marginTop:"20px",
                borderTop:
                  "1px solid #374151",
                paddingTop:"15px"
              }}
            >

              <h4>
                Electrical Floor 2
              </h4>

              <div
                style={{
                  display:"grid",
                  gridTemplateColumns:
                    "repeat(4,1fr)",
                  gap:"10px"
                }}
              >

                {nodes
                  .slice(8)
                  .map(node => (

                  <div
                    key={node.id}

                    title={`
${node.id}
${node.status}
${node.temperature}°C
`}

                    style={{

                      background:
                        getColor(
                          node.status
                        ),

                      height:"40px",

                      borderRadius:"10px",

                      display:"flex",

                      justifyContent:
                        "center",

                      alignItems:
                        "center",

                      color:"black",

                      fontWeight:"bold"
                    }}
                  >

                    {node.id
                      .replace(
                        "Node-",
                        ""
                      )}

                  </div>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}