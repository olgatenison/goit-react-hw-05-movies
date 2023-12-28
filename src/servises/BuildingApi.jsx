import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '992758a4802a699e8df27d4d6efc34fb';

// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// a list of the most popular movies of today to create a collection on the main page.
export const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

// пошук фільму за ключовим словом на сторінці фільмів.
// search for a movie by keyword on the movies page.
export const fetchSearchByKeyword = async keyword => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
  );
  return response.data.results;
};

// запит повної інформації про фільм для сторінки кінофільму.
// request full movie information for movie page.
export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

// запит інформації про акторський склад для сторінки кінофільму.
// request cast information for the movie page.
export const fetchActors = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

// запит оглядів для сторінки кінофільму.
// request reviews for the movie page.
export const fetchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
