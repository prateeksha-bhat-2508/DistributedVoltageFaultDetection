export default function NodeStatusModal({
  nodes,
  onClose
}) {

  return (

    <div
      style={{
        position:"fixed",
        top:0,
        left:0,
        width:"100%",
        height:"100%",
        background:
          "rgba(0,0,0,0.7)"
      }}
    >

      <div
style={{
background:"#111827",
width:"75%",
height:"75vh",
overflowY:"auto",
margin:"50px auto",
padding:"20px",
borderRadius:"15px"
}}
>

        <button
          onClick={onClose}
        >
          Close
        </button>

        <h2>
          Node Status
        </h2>

        {nodes.map(node=>(

          <p key={node.id}>

            {node.id}
            {" - "}
            {node.status}

          </p>

        ))}

      </div>

    </div>
  );
}