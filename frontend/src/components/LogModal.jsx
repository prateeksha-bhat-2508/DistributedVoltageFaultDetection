export default function LogModal({
  events,
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
          width:"70%",
          margin:"50px auto",
          padding:"20px",
          height:"75vh",
overflowY:"auto",
          borderRadius:"15px"
        }}
      >

        <button
          onClick={onClose}
        >
          Close
        </button>

        <h2>
          Event Logs
        </h2>

        {events.map((event,index)=>(

          <p key={index}>

            {event.time}
            {" | "}
            {event.node}
            {" | "}
            {event.fault}

          </p>

        ))}

      </div>

    </div>
  );
}