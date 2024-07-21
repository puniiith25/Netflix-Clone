import React, { useEffect, useRef, useState } from 'react'
import './Titlecard.css'
import cards_data from '../../assets/cards/Cards_data.js'
import { Link } from 'react-router-dom'



const TitleCard = ({title,Cateogory}) => {
  const [ApiData , SetApiData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGQyNTc3MGRiNjI4YzcwODAxNDY2NjVkMDQxZWVkNiIsIm5iZiI6MTcyMDUyMDk1Mi4xMzA3MjgsInN1YiI6IjY2OGQwZWQ2MDgyZWU5ZmYzZTllYWQwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MMdd4uzJ58z0GOwFpGyZ0VHRRwwBlzZdGzIDNQP7f_Y'
    }
  };
  
  


  const Cardref = useRef();
  const HandleWheel = (event)=>{
    event.preventdeflut();
    Cardref.current.scrollLeft += event.deltaY;
  }
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${Cateogory?Cateogory:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => SetApiData(response.results))
    .catch(err => console.error(err));


    Cardref.current.addEventListener('wheel',HandleWheel)
    
  },[])
 
  return (
    <div className='title-Card' >
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="Card-list" ref={Cardref}>
        {ApiData.map((card,index)=>{
          return(
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>)
        })}
      </div>
      
    </div>
  )
}

export default TitleCard
