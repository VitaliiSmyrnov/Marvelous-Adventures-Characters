import axios from "axios";

axios.defaults.baseURL = "http://gateway.marvel.com/v1/public";
axios.defaults.params = {
  apikey: import.meta.env.VITE_API_KEY,
  ts: import.meta.env.VITE_API_TS,
  hash: import.meta.env.VITE_API_HASH,
  limit: 8,
};

const getAllCharacters = async () => {
  const response = await axios.get("/characters");
  console.log("getAllCharacters", response);
  return response.data.data.results;
};

export default { getAllCharacters };
