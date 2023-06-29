import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import logo from "./logo2.png"

function Details() {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [poster, setPoster] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [rating, setRating] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const history = useHistory();

  useEffect(()=>{
    setIsDone(false);
    fetch("https://imdb-api.com/en/API/Posters/k_v0efn19f/" + id)
    .then((res)=>{return res.json()})
    .then((vertex)=>{
      setPoster(vertex);
      //console.log(vertex);
      setIsDone(true);
    });
  },[]);

  useEffect(()=>{
    setIsComplete(false);
    fetch("https://imdb-api.com/en/API/Wikipedia/k_v0efn19f/" + id)
    .then((res)=>{return res.json()})
    .then((vertex)=>{
      setData(vertex);
      //console.log(vertex);
      setIsComplete(true);
    });
  },[]);
  
  useEffect(()=>{
    setIsFinished(false);
    fetch("https://imdb-api.com/en/API/Ratings/k_v0efn19f/" + id)
    .then((res)=>{return res.json()})
    .then((vertex)=>{
      setRating(vertex);
      //console.log(vertex);
      setIsFinished(true);
    });
  },[]);
   function handleBack()
   {
    setData("");
    setPoster("");
    setRating("");
    setIsComplete(false);
    setIsDone(false);
    setIsFinished(false);
    history.go(-1);
    
   }
   const[isPosted, setIsPosted]=useState(false);
   function handleWatchlist()
   {
     setIsPosted(false);
     const name= data.fullTitle;
     const imdb= rating.imDb;
     const thumbnail= poster.posters.length!==0 ? poster.posters[0].link: "";
     const movie={name,imdb,thumbnail};
     fetch("http://localhost:8000/movies",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(movie)
     })
     .then(()=>
     {
      setIsPosted(true);
      console.log('Added to watchlist');
     })
   }
  
  return (
    <div>
     <div className='details'>
      {
        isDone &&  poster.posters.length!==0 && 
        <div className='image-details'>
         <img src={poster.posters[0].link} alt="Unable to load image" height="600px" width="375px"></img>
        </div>
      }
      {
        isComplete && 
        <div className='movie-details'>
          <h2>{data.fullTitle}</h2>
          {isFinished && <div className='rating-details'>
          <h4 style={{color:"yellow"}}>IMDB Rating : {rating.imDb}</h4>
          <h4 style={{color:"orangered"}}>Rotten Tomatoes: {rating.rottenTomatoes} %</h4>
          </div>}
          
          <p>{data.plotShort.plainText}</p>
          <div className='button-details'>
          <button onClick={handleBack}> Go Back </button>
          <button onClick={handleWatchlist}>Add To Watchlist</button>
          </div>
          
          
        </div>
      }
      
    </div>
    </div>
    
  )
}

export default Details
