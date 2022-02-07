import Nav from "./Nav";

const Layout = ({ children }) => {
    return (
        <div>
          
          <div
            style={{
              display: "flex",
            }}
            >
            <Nav />
            <main
              style={{
                // background: "#222",
                width: "100%",
                overflowY: "scroll",
                height: "100vh",
                padding:'0 30px'
              }}
            >
              {children}
            </main>
          </div>

        </div>
    );
}

export default Layout
