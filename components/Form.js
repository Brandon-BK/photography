const Form = () => {
  return (
    <div style={{ color: "#757575" }}>
      <p>Lets get in touch. Send me a message:</p>
      <input
        type="text"
        style={{
          padding: "16px 8px",
          width: "100%",
          marginTop:"12px",
          border:"none",
          border:"1px #f1f1f1 solid"
        }}
        placeholder="Name"
      />

      <input
        type="text"
        style={{
          padding: "16px 8px",
          width: "100%",
          marginTop:"12px",
          border:"none",
          border:"1px #f1f1f1 solid"
        }}
        placeholder="Email"
      />

      <input
        type="text"
        style={{
          padding: "16px 8px",
          width: "100%",
          marginTop:"12px",
          border:"none",
          border:"1px #f1f1f1 solid"
        }}
        placeholder="Subject"
      />

      <input
        type="text"
        style={{
          padding: "16px 8px",
          width: "100%",
          marginTop:"12px",
          border:"none",
          border:"1px #f1f1f1 solid"
        }}
        placeholder="Message"
      />
      <button style={{padding:"12px 24px", background:"#F1F1F1", border:"none",marginTop:"11px"}}>SEND MESSAGE</button>
    </div>
  );
};

export default Form;
