import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "5494c8380e66244da8920daf9237434d",
    language: "en-US",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  detail: (id) =>
    api.get(`movie/${id}`, {
      params: { append_to_response: "videos,credits" },
    }),
  search: (term) =>
    api.get("search/movie", { params: { query: encodeURIComponent(term) } }),
};

export const TVApi = {
  airingToday: () => api.get("tv/airing_today"),
  popular: () => api.get("tv/popular"),
  topRated: () => api.get("tv/top_rated"),
  detail: (id) =>
    api.get(`tv/${id}`, { params: { append_to_response: "videos,credits" } }),
  search: (term) =>
    api.get(`search/tv`, { params: { query: encodeURIComponent(term) } }),
  season: (id, seasonNum) => api.get(`tv/${id}/season/${seasonNum}`),
};

export const GetCollection = (id) => api.get(`collection/${id}`);
