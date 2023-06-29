import React from 'react'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash} from "@fortawesome/free-solid-svg-icons"
import { useHistory } from 'react-router-dom'

function Watchlist() {
  const[data,setData]= useState('');
  const[isDone, setIsDone]= useState(false);
  const history = useHistory();
  useEffect(()=>
  {
    setIsDone(false);
    fetch("http://localhost:8000/movies")
    .then((res)=>{return res.json()})
    .then ((vertex)=>
    {
        setData(vertex);
        setIsDone(true);
    });
  },[])
  function handleDelete(id)
  {
    fetch("http://localhost:8000/movies/"+ id,{
      method: "DELETE"
    })
    .then(()=>
    {
       console.log("Item Deleted");
       window.location.reload();
    })
  
  }
  return (
    <div className='Watchlist'>
      {
        isDone && data.length!==0 ?
        data.map((field)=>
        (
            <div className='Watchlist-details'>
                <img src={field.thumbnail} alt="Unable to load image" height="100px" width="62.5px"></img>
                <div className='info'>
                <h4>{field.name}</h4>
                <p>IMDB Rating: {field.imdb}</p>
                {/*<button onClick={()=>(handleDelete(field.id))}>Remove</button>*/}
                <FontAwesomeIcon icon={faTrash} onClick={()=>(handleDelete(field.id))}/>
                </div>
                
            </div>
        )) : <p style={{fontSize:"25px", textAlign:"center", width:"100%", marginLeft:"0px"}}>No Items Added to Watchlist</p>
      }
    </div>
  )
}

export default Watchlist
