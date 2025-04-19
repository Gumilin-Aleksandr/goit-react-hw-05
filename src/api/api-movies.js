import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWViZDFiYTBmODg1NzM4YmIzYzRiM2RkYzk5OGEwNiIsIm5iZiI6MTc0NDk3NjA2OC44MzIsInN1YiI6IjY4MDIzOGM0MmU4OTU4ZjBmOTk5N2NiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WEudrz2h7S-dXb6CUmzC-iM8ju14lAuf2JcyFW8kv0I",
  },
  params: { language: "en-US" },
};

export const getMoviesTrending = async () => {
  const response = await axios.get(`trending/movie/day`, options);

  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}`, options);

  return response.data;
};

export const getMovieSearch = async (query) => {
  const response = await axios.get(
    `search/movie?query=${query}&page=1`,
    options
  );

  return response.data.results;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits?`, options);

  return response.data;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/reviews?`, options);

  return response.data;
};
