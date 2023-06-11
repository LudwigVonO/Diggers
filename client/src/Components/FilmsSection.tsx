import React, { useState, useEffect, useContext } from 'react'
import { 
  useGetFilmsQuery,
  useFilmsByMoodQuery,
  Film,
  Recommendation 
} from '../generated/graphql.tsx'
import { FiltersContext } from '../Context/FiltersContext.tsx'
import MoodView from './FilmViews/MoodView.tsx'
import RecommenderView from './FilmViews/RecommenderView.tsx'
import GenreView from './FilmViews/GenreView.tsx'

const FilmsSection: React.FC = () => {
  const [films, setfilms] = useState<Film[]>([] as Film[])
  const { data, error, loading } = useGetFilmsQuery()

  const filtersContext = useContext(FiltersContext);

  if (filtersContext?.selectDisplay == 'Mood'){
    return <MoodView />
  }
  else if (filtersContext?.selectDisplay == 'Recommender') {
    return <RecommenderView />
  }
  else {
    return <GenreView />
  }
}

export default FilmsSection;