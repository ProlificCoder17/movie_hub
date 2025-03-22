const API_KEY = "537f19e0e6d671e84911e356155f9009";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  // Use a default search query like "popular" to simulate popular movies
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
