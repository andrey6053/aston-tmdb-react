import axios from "axios";
import { KEY_ACCESS_API } from "../config/default";
import { toast } from "react-toastify";
axios.defaults.headers.common["Authorization"] = `Bearer ${KEY_ACCESS_API}`;

export async function getSliderFilms() {
  try {
    const response = await axios.get("https://api.themoviedb.org/3/movie/popular");
    return response.data.results;
  } catch (e) {
    toast.error(e.message);
    return [];
  }
}

export async function getFilmsBySort(query) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=${query}`);
    return response.data.results;
  } catch (e) {
    toast.error(e.message);
    return [];
  }
}

export async function searchFilms(query) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`);
    return response.data.results;
  } catch (e) {
    toast.error(e.message);
    return [];
  }
}
