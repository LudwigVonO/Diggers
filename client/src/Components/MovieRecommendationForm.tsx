import React, { useState, useEffect, useContext, FC } from 'react'


interface filmProp {
  film:OneFilm;
}

const FilmCard:FC<filmProp> = ({film}) => {
  console.log(film);
  return (
    <div className='filmCard'>
      <img src={'https://image.tmdb.org/t/p/w300/'+film.poster_path}/>
    </div>
  )
}

export default FilmCard;