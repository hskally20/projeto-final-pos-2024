import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:8000/api/" });

export const fetchAnimes = () => API.get("animes/");
export const fetchAnime = (id) => API.get("animes/" + id + "/");
export const createAnime = (data) => API.post("animes/", data);
export const updateAnime = (id, data) => API.put("animes/" + id + "/", data);
export const deleteAnime = (id) => API.delete("animes/" + id + "/");

export const fetchEpisodes = () => API.get("episodes/");
export const createEpisode = (data) => API.post("episodes/", data);

export const fetchComments = () => API.get("comments/");
export const createComment = (data) => API.post("comments/", data);