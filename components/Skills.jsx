import React from "react";

const Skills = () => {
  return (
    <div style={{ fontWeight: "400", color: "grey" }}>
      <h1 style={{ fontWeight: "400", marginBottom: 40 }}>My Skills</h1>

      <div>
        <p style={{ letterSpacing: "5px" }}>Photography</p>

        <div style={{ height: 30, width: "100%", background: "lightgrey" }}>
          <div
            style={{
              height: "100%",
              width: "95%",
              background: "grey",
              color: "white",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            95%
          </div>
        </div>
      </div>

      <div>
        <p style={{ letterSpacing: "5px" }}>Web Design</p>

        <div style={{ height: 30, width: "100%", background: "lightgrey" }}>
          <div
            style={{
              height: "100%",
              width: "85%",
              background: "grey",
              color: "white",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            85%
          </div>
        </div>
      </div>

      <div>
        <p style={{ letterSpacing: "5px" }}>Photoshop</p>

        <div style={{ height: 30, width: "100%", background: "lightgrey" }}>
          <div
            style={{
              height: "100%",
              width: "80%",
              background: "grey",
              color: "white",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            80%
          </div>
        </div>
      </div>

      <div
        style={{
          height: 100,
          width: "100%",
          background: "grey",
          marginTop: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          fontSize: "400",
        }}
      >
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: 70,
          }}
        >
          <h2 style={{ margin: "0 0 10px 0", fontSize: "400" }}>14+</h2>
          <p style={{ margin: 0 }}>Partners </p>
        </div>

        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: 70,
          }}
        >
          <h2 style={{ margin: "0 0 10px 0" }}>55+</h2>
          <p style={{ margin: 0 }}>Projects Done </p>
        </div>

        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: 70,
          }}
        >
          <h2 style={{ margin: "0 0 10px 0" }}>89+</h2>
          <p style={{ margin: 0 }}>Happy Clients </p>
        </div>

        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: 70,
          }}
        >
          <h2 style={{ margin: "0 0 10px 0" }}>150+</h2>
          <p style={{ margin: 0 }}>Meetings </p>
        </div>
      </div>

      <button
                    style={{
                    textAlign: "center",
                    margin: "30px 0px 0px",
                    padding: "12px 24px",
                    border: "none",
                    fontSize: "15px",
                    borderRadius:'5px'
                    }}
                >
                    {" "}
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-file-arrow-down-fill"
                    viewBox="0 0 16 16"
                    >
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z" />
                    </svg>{" "}
                    Download Resume
                </button>
    </div>
  );
};

export default Skills;
