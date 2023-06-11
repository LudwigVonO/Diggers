import { RowData,OneFilm } from '../Types/RowData.js';
import { 
  Film,
  Mood,
  User
} from '../generated/graphql.tsx'

export function cleanFilmsByMood(allMoods:Mood[]):RowData[] {
  let cleanedObject:RowData[] = [];
  allMoods.forEach((mood)=>{
    let additionalMood:RowData = {
      id : mood.id,
      header : mood.name,
      subHeader : mood.description,
      films : []
    };

    let pastFilms:number[] = [];
    mood.refRecommendationsWMoodsByMoodId.nodes.forEach((recs:any)=>{
      let film = recs.recommendationByRecommendationId.filmByMediaId;
      if (pastFilms.includes(film.id)){
        let pastFilmFound = false;
        let i = 0;
        while (!pastFilmFound){
          if (additionalMood.films[i].id == film.id){
            additionalMood.films[i].count += 1;
            pastFilmFound = true;
          }
          i++;
        }
      }
      else {
        let newFilm:OneFilm = {
          id : film.id,
          title: film.title,
          poster_path : film.posterPath,
          count : 1
        }
        additionalMood.films.push(newFilm);
        pastFilms.push(film.id);
      }
    })
    cleanedObject.push(additionalMood);
  })
  return cleanedObject;
}

export function cleanFilmsByRec(allRecs:User[]):RowData[] {
  let cleanedObject:RowData[] = [];
  allRecs.forEach((rec)=>{
    let additionalMood:RowData = {
      id : rec.id,
      header : rec.firstName + ' '+ rec.lastName,
      subHeader : '',
      films : []
    };

    let pastFilms:number[] = [];
    rec.filmsByRecommendationRecommenderIdAndMediaId.nodes.forEach((film:any)=>{
      console.log("LOG LOG");
      console.log(film);
      if (pastFilms.includes(film.id)){
        let pastFilmFound = false;
        let i = 0;
        while (!pastFilmFound){
          if (additionalMood.films[i].id == film.id){
            additionalMood.films[i].count += 1;
            pastFilmFound = true;
          }
        }
      }
      else {
        let newFilm:OneFilm = {
          id : film.id,
          title: film.title,
          poster_path : film.posterPath,
          count : 1
        }
        additionalMood.films.push(newFilm);
      }
    })
    cleanedObject.push(additionalMood);
    console.log({cleanedObject});
  })
  return cleanedObject;
}