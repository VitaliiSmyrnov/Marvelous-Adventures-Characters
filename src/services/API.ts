import axios from "axios";

const API_KEY = import.meta.env.API_KEY;
axios.defaults.baseURL = "http://gateway.marvel.com/v1/public";
axios.defaults.params = {
  apikey: API_KEY,
  ts: "",
  hash: "",
  limit: 8,
};

const getAllCharacters = async () => {
  const response = await axios.get("/characters");
  console.log("getAllCharacters", response);
  return response;
};

export default { getAllCharacters };
