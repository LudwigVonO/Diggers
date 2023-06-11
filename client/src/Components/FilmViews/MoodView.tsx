import React, { useState, useEffect, useContext } from 'react'
import { 
  Mood,
  useFilmsByMoodQuery
} from '../../generated/graphql.tsx'
import { cleanFilmsByMood } from '../../Services/data.utils.tsx';
import { OneFilm, RowData } from '../../Types/RowData.ts';
import FilmCard from '../FilmCard.tsx';
import { FiltersContext } from '../../Context/FiltersContext.tsx';

const MoodView: React.FC = () => {
  const [rowData, setRowData] = useState<RowData[]>([] as RowData[])
  const filtersContext = useContext(FiltersContext);
  const { data, error, loading } = useFilmsByMoodQuery();
  useEffect(() => {
    if (data) {
      if (data && data.allMoods && data.allMoods.nodes) {
        setRowData(cleanFilmsByMood(data.allMoods.nodes as Mood[]) as RowData[])
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
      {rowData &&
        rowData.length > 0 &&
        rowData.map((row: RowData, index: number) => {
            return (
              <div className='Row'>
                <div className='RowHeader'>
                <h2 className='accent' key={`mood_${index}`}>{row.header}</h2>
                <p>{row.subHeader}</p>
                </div>
                <div className='FilmsRow'>
                {
                  row.films.map((film:OneFilm)=>{
                    return <FilmCard key={`film_${film.id}`} film={film} />
                  })
                }
                </div>
            </div>
            );
        })}
    </>
  )
}

export default MoodView;