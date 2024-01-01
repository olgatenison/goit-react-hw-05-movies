const API_KEY = "d37f6a23bd7ef44f9836a4799b5199b5";
const BASE_URL = 'https://api.themoviedb.org/3';
 
async function ApiService(URL) {
  try {
    let responce = await fetch(URL);
    return await responce.json();
  } catch (error) {
    console.log(error);
  }
}

 export async function getDayTrandingMovies() {
    const URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  return ApiService(URL);
  };

 
 export async function  getMovieById (movieId) {
     const URL = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  return ApiService(URL);
  };


  export async function getMoviesByQuery (query) {
    const URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`;
  return ApiService(URL);

  };


 export async function getMovieCredits ( movieId ) {
 const URL = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  return ApiService(URL);
  };

 
  export async function getMovieReviews (movieId) {
 const URL = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  return ApiService(URL);
  };