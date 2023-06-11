import React, { useState, useEffect } from 'react'
import {
  User, 
  useFilmsByRecommenderQuery
} from '../../generated/graphql.tsx'
import { cleanFilmsByRec } from '../../Services/data.utils.tsx';
import { OneFilm, RowData } from '../../Types/RowData.ts';
import FilmCard from '../FilmCard.tsx';

const RecommenderView: React.FC = () => {
  const [rowData, setRowData] = useState<RowData[]>([] as RowData[])
  const { data, error, loading } = useFilmsByRecommenderQuery();
  let usableData : RowData[] = [];
  useEffect(() => {
    if (data) {
      if (data && data.allUsers && data.allUsers.nodes) {
        setRowData(cleanFilmsByRec(data.allUsers.nodes as User[]) as RowData[])
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
          return (<div className='Row'>
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
            </div>)
})}
    </>
  )
}


export default RecommenderView;

