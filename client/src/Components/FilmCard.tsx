import React, { useState, useEffect, useContext, FC } from 'react'
import { FiltersContext } from '../Context/FiltersContext.tsx'
import MoodView from './FilmViews/MoodView.tsx'
import RecommenderView from './FilmViews/RecommenderView.tsx'
import GenreView from './FilmViews/GenreView.tsx'
import { OneFilm, FilmProps } from '../Types/RowData.js'

interface filmProp {
  film:OneFilm;
}

const FilmCard:FC<filmProp> = ({film}) => {
  return (
    <div className='filmCard'>
      <img src={'https://image.tmdb.org/t/p/w300/'+film.poster_path}/>
    </div>
  )
}

export default FilmCard;