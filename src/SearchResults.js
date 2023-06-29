import React from 'react';
import { useState , useEffect} from 'react';
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import logo from "./logo2.png"

function SearchResults() {
   const { entry } = useParams();
   const [data, setData]= useState("");
    const [isComplete, setIsComplete]= useState(false);
    useEffect(()=>{
        setIsComplete(false);
        fetch("https://imdb-api.com/en/API/SearchMovie/k_v0efn19f/" + entry)
        .then((res)=>{return res.json()})
        .then((vertex)=>
        {
          setData(vertex);
          console.log(vertex);
          setIsComplete(true);
        });
    },[]);

       
  
  return (
    <div>
    <div className='image'>
          <img src= {logo} alt='Unable to load image' height="125px" width="400px" />
    </div>
    <div className='results'>
      <h2>SEARCH RESULTS</h2>
      {
        isComplete &&
        data.results.map((ind)=>
        (
          <div className='ind'>
            <div className='image-box'>
            <img src={ind.image} alt='Unable to load image' height="400px" width="250px"></img>
            <Link to={`/Details/${ind.id}`}>
                <h4>{ind.title}</h4>
            </Link>
            
            </div>
             
             
          </div>
        ))
      }
    
    </div>
    <Link to="/" className='go-home' >
    <button>Go To Home</button>
    </Link>
 </div>
  )
}

export default SearchResults
