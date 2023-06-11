import React, { useState, useEffect, useContext, FC, ReactEventHandler } from 'react';
import {Form,Input,Modal,Rate,Select} from 'antd';
import { LinkSearchResult, OneSearchFilm } from '../Types/SearchResults.js';
import getMovieDetails from '../Services/rapid.api.service.ts';
import { useSearchByTmdbIdQuery } from '../generated/graphql.tsx';

const {Option} = Select;
const {TextArea} = Input;
interface searchResultProp {
  film:OneSearchFilm;
  pickedMovie:Function;
}

const SearchResultCard:FC<searchResultProp> = ({film,handlePickedMovie}) => {

  const [recommendationModal,setRecommendationModal] = useState<boolean>(false);
  const [movieDetails,setMovieDetails] = useState<LinkSearchResult|null>(null);
  const [movieExists,setMovieExists] = useState(true);
  const { data, error, loading } = useSearchByTmdbIdQuery({
    variables:{
      search: film.id
    }
  });
  useEffect(() => {
    if (data) {
      console.log(data);
      if (data.searchFilms && data.searchFilms?.nodes.length > 0){
        setMovieExists(true);
      }
      else {
        setMovieExists(false);
      }
    }
    if (error) {  
      console.log(error)
    }
    if (loading) {
      console.log(loading)
    }
  }, [data, error, loading])

  const handleClick = (event: MouseEvent)=>{
    getMovieDetails(event.currentTarget.id).then(results => setMovieDetails(results));
    handlePickedMovie({film,movieDetails});
  }
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    
  };

  return (
    <div className='SearchResultCard' onClick={handleClick} id={film.id}>
      <Modal
       title="Recommend a movie"
       style={{ top: 80}}
       open={recommendationModal}
       onOk={() => setRecommendationModal(false)}
       onCancel={() => setRecommendationModal(false)}
       width={1000}
      >
        <div style={{display:'flex', flexDirection:'column',gap:50}}> 
          <div className='SearchResultFilmSection' style={{display:'flex',flexDirection:'row',gap:20}}>
            <img className = 'SearchResultPoster' src={'https://image.tmdb.org/t/p/w300/'+film.poster_path}/>
            <div className='SearchResultInfo'>
                <h4 className='SearchResultTitle'>{film.title}</h4>
                <p className='SearchResultOverview'>{film.overview}</p>
                <div className='MovieLinks' style={{display:'flex',flexDirection:'row'}}>
                  { movieDetails && movieDetails.collection && movieDetails.collection.locations &&
                    movieDetails.collection.locations.map(item=>{
                      return(
                        <div>
                          <a href={item.url}>
                            <img src={item.icon}/>
                          </a>
                        </div>
                      ) 
                    })
                  }
                </div>
            </div>
          </div>
          <Form className='RecommendationForm'>
            <Form.Item
              name="select-multiple"
              label="Moods (up to 3)"
              rules={[{ required: true, message: 'Please indicate why you enjoyed the film', type: 'array' }]}
            >
              <Select mode="multiple" placeholder={movieExists}>
                <Option value="1">Visual Masterpiece</Option>
                <Option value="2">Splendid Soundtrack</Option>
                <Option value="3">Psychological Rollercoaster</Option>
                <Option value="4">Emotionally Intense</Option>
              </Select>
            </Form.Item>
            <Form.Item name="rate" label="Rating (optional)">
              <Rate />
            </Form.Item>
            <TextArea
              showCount
              maxLength={1000}
              style={{ height: 200, resize: 'none' }}
              onChange={onChange}
              placeholder="You're welcome to add a textual review"
            />
          </Form>
        </div>
      </Modal>
      <img className = 'SearchResultPoster' src={'https://image.tmdb.org/t/p/w300/'+film.poster_path}/>
      <div className='SearchResultInfo'>
          <h4 className='SearchResultTitle'>{film.title}</h4>
          <p className='SearchResultOverview'>{film.overview}</p>
      </div>
    </div>
  )
}

export default SearchResultCard;