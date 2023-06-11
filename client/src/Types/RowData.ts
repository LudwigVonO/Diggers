export type FilmProps = {
  film : OneFilm;
}

export type RowData = {
  id:number;
  header:string;
  subHeader:string;
  films:OneFilm[];
}

export type OneFilm = {
  id: number;
  title:string;
  poster_path:string;
  count:number;
}