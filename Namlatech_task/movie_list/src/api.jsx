import axios from "axios";

const API_KEY = "ef8a5b08780d0bdb9cc64c4b322178e2"; 
const BASE_URL = "https://api.themoviedb.org/3/collection";

export const getCollectionDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}?api_key=${API_KEY}&language=en-US`);
  return response.data;
};
