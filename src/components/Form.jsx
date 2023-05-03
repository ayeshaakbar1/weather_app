import React from "react";
import { Paper, InputBase, Divider, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { getWeather } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../redux/weatherAction";
const Form = ({ setResult }) => {
  const city = useSelector((state) => state.weatherReducers.city);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setCity(event.target.value));
  };

  const getWeatherInfo = async () => {
    let response = await getWeather(city);
    setResult(response);
  };

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "7px 1px",
          display: "flex",
          alignItems: "center",
          width: 550,
          backgroundColor: "#c4bcff",
          borderRadius: 7,
        }}
      >
        <IconButton type="button" sx={{ p: "20px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search City Here"
          inputProps={{ "aria-label": "search google maps" }}
          name="city"
          onChange={(e) => handleChange(e)}
        />
        <Divider sx={{ height: 50, m: 0.9 }} orientation="vertical" />
        <Tooltip title="Search">
          <IconButton
            onClick={() => getWeatherInfo()}
            color="primary"
            sx={{ p: "20px" }}
            aria-label="directions"
          >
            <DirectionsIcon />
          </IconButton>
        </Tooltip>
      </Paper>
    </>
  );
};
export default Form;
