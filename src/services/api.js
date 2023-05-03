import axios from "axios";

// const API_KEY = "232154eafcfbf6a363f9df222a75bce9";
const API_KEY = "d4ba39316213809ff9f8380f1536d9e0";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city) => {
  try {
    let response = await axios.get(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error while calling the api", error.message);
    return error.response;
  }
};
