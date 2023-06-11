export default function getMovies(query:string) {

  const authToken = process.env.REACT_APP_TMDB_AUTH_TOKEN;

  const url = `https://api.themoviedb.org/3/search/movie?query=${JSON.stringify(query)}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  };

  return fetch(url, options)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`)
    });

}
