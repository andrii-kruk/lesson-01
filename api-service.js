const BASE_URL = "https://api.themoviedb.org";
const API_KEY = "dd027d4f0ede6cde1462c11a8aff31fd";

export function fetchMoviesFromServer() {
  return fetch(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=King%20Arthur&include_adult=false&language=en-US&page=1`
  )
    .then((response) => console.log(response.jcon()))
    .catch((err) => console.log(err));
}
fetchMoviesFromServer()