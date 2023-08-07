import axios from "axios";
import { KEY_ACCESS_API } from "../config/default";
import { toast } from "react-toastify";
axios.defaults.headers.common["Authorization"] = `Bearer ${KEY_ACCESS_API}`;

export async function getActorsList(page = 1) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/person/popular?&page=${page}`);
    return response.data.results;
  } catch (e) {
    toast.error(e.message);
    return [];
  }
}

export async function getActor(id) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/person/${id}`);
    localStorage.setItem("dataPageActor", JSON.stringify(response.data));
    return response.data;
  } catch (e) {
    toast.error(e.message);
    return [];
  }
}

export async function getActorBySearch(query) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${query}`);
    return response.data.results;
  } catch (e) {
    toast.error(e.message);
    return [];
  }
}
