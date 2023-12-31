import axios from "axios";

axios.defaults.baseURL = "http://gateway.marvel.com/v1/public";
axios.defaults.params = {
  apikey: import.meta.env.VITE_API_KEY,
  ts: import.meta.env.VITE_API_TS,
  hash: import.meta.env.VITE_API_HASH,
  // limit: 100,
  // modifiedSince: "2020-01-01",
  // nameStartsWith: "Ant",
};
// axios.defaults.headers = {
//   "Accept-Encoding": "gzip",
// };

type IAbort = {
  aborted: true | false;
};

const getRandomCharacters = async (abort: IAbort) => {
  const response = await axios.get("/characters", {
    params: {
      offset: Math.floor(Math.random() * 1463),
      limit: 100,
      orderBy: "modified",
    },
    signal: abort,
  });

  return response.data.data.results;
};

const getAllCharacters = async () => {
  const response = await axios.get("/characters");
  return response.data.data.results;
};

const getOneCharacter = async (id: string) => {
  const response = await axios.get(`/characters/${id}`);
  return response.data.data.results;
};

const getAllComics = async () => {
  const response = await axios.get("/comics");
  return response.data.data.results;
};

export default {
  getRandomCharacters,
  getAllCharacters,
  getAllComics,
  getOneCharacter,
};
