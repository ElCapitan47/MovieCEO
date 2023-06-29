import React from 'react'
import { useState } from 'react';
import logo from "./logo2.png"
import {Link} from 'react-router-dom';
import SearchResults from './SearchResults';

function Home() {
  const[entry,setEntry]= useState('');
  /*const [data, setData]= useState([]);
  const [isPending, setIsPending]= useState(false);
  function handleClick({entry}) {
    
    setIsPending(false);
    fetch("https://imdb-api.com/en/API/SearchSeries/k_wv721a7n/" + entry)
    .then((res)=>{return res.json()})
    .then((vertex)=>
    {
      console.log(vertex);
      setData(vertex);
      
      setIsPending(true);
    });
  }*/
 
 
  

  return (
    <div className='home'>
        <div className='image'>
          <img src= {logo} alt='Unable to load image' height="125px" width="400px" />
        </div>
   
      <h1>MOVIES, SERIES, TV SHOWS...ALL IN ONE PLACE</h1>
      <h3> Designed for Movie Enthusiasts!</h3>
      <p> Explore our extensive database featuring a vast collection of films across various genres, eras, and languages. 
        Whether you're into action, romance, sci-fi, or animation, you'll find something to suit your taste. We provide detailed plot 
        summaries, cast and crew information, trailers, and reviews to help you make informed choices before hitting the theater or 
        streaming platform.
        
        Get ready to embark on an immersive cinematic journey with Movie Details App. Enhance your movie-watching experience, 
        share your newfound knowledge with friends, and become the ultimate movie enthusiast. Let us be your go-to source for all the 
        fascinating details that make movies truly magical. Start exploring now and let the magic of the silver screen come alive!
      </p>
      <input type='text' placeholder='Search' value={entry} onChange={(e)=>(setEntry(e.target.value))}></input>

      <Link to= {`/SearchResults/${entry}`} style={{textDecoration: "none"}}>
         <button> Search </button>
      </Link>
      
     
       
      
    </div>
  )
}

export default Home
