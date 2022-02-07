const Banner = () => {
    return (
        <div style={{
            padding:"128px 16px",
            display:"flex",
            flexDirection:"column",
            alignItems:"center"

        }}>
           <h1 style={{fontFamily: "Montserrat",textAlign:"center", margin:"10px 0px",fontSize:"74px"}}><b style={{font:"64px"}}>Jane Doe</b></h1>
           <p style={{textAlign:"center", fontSize:"15px"}}>Photographer and Web Designer.</p>
           <button style={{textAlign:"center",margin:"16px 0px 0px",padding:"12px 24px", border:"none", fontSize:"15px"}}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-arrow-down-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z"/>
</svg> Download Resume</button>
        </div>
    );
}


export default Banner;