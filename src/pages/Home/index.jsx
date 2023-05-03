import React from "react";
import { CssBaseline, Typography, Container, Button } from "@mui/material";
import WeatherIcons from "../../assets/WeatherIcons.gif";
import ripple1 from "../../assets/ripple1.gif";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/forcast");
  };
  const styleRipp = { marginLeft: "260px" };
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ marginTop: "100px" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 910,
            marginLeft: "50px",
            letterSpacing: ".2rem",
            color: "white",
          }}
        >
          How's Today's Weather?
        </Typography>
        <img
          src={WeatherIcons}
          height="500"
          width="590"
          alt="current-weather-status"
        />

        <img
          src={ripple1}
          height="70"
          width="70"
          alt="current-weather-status"
          style={styleRipp}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleNext}
          sx={{
            fontSize: "18px",
            maxWidth: "sm",
            marginTop: "50px",
            padding: "16px",
            borderRadius: 8,
            minWidth: 32,
          }}
        >
          today's weather
        </Button>
      </Container>
    </>
  );
};

export default Home;
