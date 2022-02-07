import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Portfolio = () => {
  return (
    <Box>
      <Typography variant="h4" style={{ color: "grey" }}>
        My Portfolio
      </Typography>

      <div
        style={{
          borderBottom: "1px solid lightgrey",
          width: "100%",
          marginTop: 20,
        }}
      ></div>

      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 370,
          }}
        >
          <img src="./l-1.jpg" />
          <img src="./l-2.jpg" style={{ margin: "10px 0" }} />
          <img src="./l-3.jpg" />
        </Box>

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 370,
          }}
        >
          <img src="./r-1.jpg" />
          <img src="./r-2.jpg" />
          <img src="./r-3.jpg" />
          <img src="./r-3.jpg" />
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
