const apiKey = process.env.REACT_APP_RAPID_API_KEY;
const apiHost = process.env.REACT_APP_RAPID_API_HOST;

export default function getMovieDetails(id:number){
  const url = `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=${id}&source=tmdb&country=fr`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': apiHost
    }
  };
  return( 
    fetch(url, options)
      .then(res => res.status <= 400 ? res : Promise.reject(res))
      .then(res => res.json())
      .catch((err) => {
        console.log(`${err.message} while fetching /${url}`)
      })
  )
}