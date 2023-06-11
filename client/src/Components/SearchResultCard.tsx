import React, { useState, useEffect, useContext, FC } from 'react';
import { OneSearchFilm } from '../Types/SearchResults.js';

interface searchResultProp {
  film:OneSearchFilm;
}

const SearchResultCard:FC<searchResultProp> = ({film}) => {
  console.log(film);
  return (
    <div className='SearchResultCard'>
      <img className = 'SearchResultPoster' src={'https://image.tmdb.org/t/p/w300/'+film.poster_path}/>
      <div className='SearchResultInfo'>
          <h4 className='SearchResultTitle'>{film.title}</h4>
          <p className='SearchResultOverview'>{film.overview}</p>
      </div>
    </div>
  )
}

export default SearchResultCard;