import React, { useEffect, useState } from 'react'
import './player.css'
import Back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const {id}=useParams();
  const Navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name:'',
    key:'',
    published_at:'',
    type:''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGQyNTc3MGRiNjI4YzcwODAxNDY2NjVkMDQxZWVkNiIsIm5iZiI6MTcyMDUyMDk1Mi4xMzA3MjgsInN1YiI6IjY2OGQwZWQ2MDgyZWU5ZmYzZTllYWQwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MMdd4uzJ58z0GOwFpGyZ0VHRRwwBlzZdGzIDNQP7f_Y'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  return (
    <div className='Player'>
      <img src={Back_arrow} alt="" onClick={()=>{
        Navigate(-1)
      }}/>
      <iframe width='90%' height='90%' 
       src={`https://www.youtube.com/embed/${apiData.key}`}
       title='trailer' frameBorder='0' allowFullScreen>

      </iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
      
    </div>
  )
}

export default Player
