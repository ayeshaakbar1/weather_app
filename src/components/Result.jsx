import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import CloudIcon from "@mui/icons-material/Cloud";
import AirIcon from "@mui/icons-material/Air";
import map from "../assets/map.png";
import suncloud from "../assets/sunclouds.gif";
const Result = ({ result }) => {
  return result && Object.keys(result).length > 0 ? (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ justifyContent: "center" }}>
        <Box sx={{ alignContent: "center" }}>
          <img
            src={suncloud}
            alt="cloud"
            height="210px"
            style={{ marginTop: "60px", marginLeft: "160px" }}
          />
        </Box>
        <Box sx={{ color: "white", padding: "40px" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              letterSpacing: ".2rem",
              marginBottom: "14px",
            }}
          >
            <LocationOnIcon /> Location: {""}
            {result.name} , {result.sys.country}
          </Typography>
          <Divider sx={{ backgroundColor: "grey" }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              letterSpacing: ".2rem",
              marginBottom: "14px",
            }}
          >
            <ThermostatIcon /> Temperature: {result.main.temp}
          </Typography>
          <Divider sx={{ backgroundColor: "grey" }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              letterSpacing: ".2rem",
              marginBottom: "14px",
            }}
          >
            <OpacityIcon /> Humidity: {result.main.humidity}
          </Typography>
          <Divider sx={{ backgroundColor: "grey" }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              letterSpacing: ".2rem",
              marginBottom: "14px",
            }}
          >
            <WbSunnyIcon /> Sun Rise: {""}
            {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
          </Typography>
          <Divider sx={{ backgroundColor: "grey" }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              letterSpacing: ".2rem",
              marginBottom: "14px",
            }}
          >
            <Brightness6Icon /> Sun Set: {""}
            {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
          </Typography>
          <Divider sx={{ backgroundColor: "grey" }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              letterSpacing: ".2rem",
              marginBottom: "14px",
            }}
          >
            <CloudIcon /> Clouds: {result.clouds.all} %
          </Typography>
          <Divider sx={{ backgroundColor: "grey" }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              letterSpacing: ".2rem",
              marginBottom: "14px",
            }}
          >
            <AirIcon /> Wind: {result.wind.speed}
          </Typography>
          <Divider sx={{ backgroundColor: "grey" }} />
        </Box>
      </Container>
    </>
  ) : (
    <Box>
      <img
        src={map}
        alt="Location"
        height="170px"
        style={{ marginTop: "140px", marginLeft: "186px" }}
      />
      <Typography
        variant="h5"
        sx={{
          color: "white",
          fontWeight: 600,
          letterSpacing: ".2rem",
          marginTop: "50px",
          marginLeft: "22px",
        }}
      >
        Please Enter City To Check Weather!
      </Typography>
    </Box>
  );
};

export default Result;
