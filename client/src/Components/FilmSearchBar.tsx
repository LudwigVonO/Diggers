import React, {useState} from "react";
import getMovies from "../Services/tmdb.api.service";
import { OneSearchFilm, SearchResults } from "../Types/SearchResults";
import SearchResultCard from "./SearchResultCard";

const FilmSearchBar: React.FC = () => {
  const [searchValue,setSearchValue] = useState('');
  const [searchResults,setSearchResults] = useState<null|SearchResults>(null);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 3) getMovies(event.target.value).then(res=> setSearchResults(res));
    setSearchValue(event.target.value)
  }

  return (
    <div id='SearchOverlay'>
      <input id='FilmSearchBar' type='text' value={searchValue} onChange={handleChange}></input>
      { searchResults && searchResults.results &&
       <div id='SearchResultsList'>
         {searchResults.results.map((film: OneSearchFilm)=>{
           return <SearchResultCard film={film} />
         })} 
       </div>
      }
    </div>
  )
}

export default FilmSearchBar;