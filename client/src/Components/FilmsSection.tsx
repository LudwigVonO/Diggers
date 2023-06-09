import React, { useState, useEffect } from 'react'
import { 
  useGetFilmsQuery,
  Film,
  Recommendation 
} from '../generated/graphql.tsx'

const FilmsSection: React.FC = () => {
  const [films, setfilms] = useState<Film[]>([] as Film[])
  const { data, error, loading } = useGetFilmsQuery()

  useEffect(() => {
    if (data) {
      if (data && data.allFilms && data.allFilms.nodes) {
        console.log(data.allFilms.nodes);
        setfilms(data.allFilms.nodes as Film[])
      }
    }
    if (error) {
      console.log(error)
    }
    if (loading) {
      console.log(loading)
    }
  }, [data, error, loading])

  return (
    <>
      <h2>Hello films,</h2>
      {films &&
        films.length > 0 &&
        films.map((film: Film, index: number) => (
          <p key={`user_${index}`}>{film.title}</p>
        ))}
    </>
  )
}

export default FilmsSection;