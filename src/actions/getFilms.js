import axios from "axios";
import { KEY_ACCESS_API } from "../config/default";
import { toast } from "react-toastify";
axios.defaults.headers.common["Authorization"] = `Bearer ${KEY_ACCESS_API}`;

export async function getSliderFilms() {
  try {
    const response = await axios.get("https://api.themoviedb.org/3/movie/popular");
    return response.data.results;
  } catch (e) {
    return [];
  }
}
export async function getFilmsBySort({ page, sort }) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sort}`
    );
    return response.data.results;
  } catch (e) {
    toast.error(`${e.message}, try use VPN`);
    return [];
  }
}

export async function getFilmsList({ page, sort }) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sort}`
    );
    return { page, payload: response.data.results };
  } catch (e) {
    toast.error(`${e.message}, try use VPN`);
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

export async function getFilmById(id) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`);
    localStorage.setItem("dataPageFilm", JSON.stringify(response.data));
    return response.data;
  } catch (e) {
    toast.error(e.message);
    return [];
  }
}
