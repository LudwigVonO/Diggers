export type SearchResults = {
  page : number ;
  results : OneSearchFilm[] ;
  total_pages : number ;
  total_results : number ; 
}
export type OneSearchFilm = {
  adult : boolean;
  backdrop_path : string;
  genre_ids: number[];
  id: number[];
  original_language: string ;
  original_title : string ;
  overview : string ;
  popularity : number ;
  poster_path : string ;
  releast_date : Date ;
  title : string ;
  video : boolean ;
  vote_average : number ;
  vote_count : number ;
}