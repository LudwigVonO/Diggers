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
  id: number;
  tmdbId: number;
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


export type LinkSearchResult = {
  collection:Connections[];
  id:string;
  status_code:number;
  type:string;
  variant:string;
  
}

export type Connections = {
  locations:OneLinkConnection[];
  name:string;
  picture:string;
  provider:string;
  source_ids:object;
  weight:number;
  id:string;
  status_code:number;
  type:"imdb";
  variant:"ivafull";
}

export type OneLinkConnection = {
  display_name:string;
  id:string;
  icon:string;
  name:string;
  url:string;
}