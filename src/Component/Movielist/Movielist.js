import React from 'react'
import "./Movielist.css"
import Moviecard from '../Moviecard/Moviecard'

const Movielist =({movies,inputsearch,rating})=>{
    return(
        <div className='card_container'>
            {movies
            .filter((el)=>
                el.title.toLowerCase().includes(inputsearch.toLowerCase())
            && el.rating >= rating
            )
           .map ((el)=>(
                <Moviecard movie={el} key={el.id}/>
            ))}
            </div>
            );
        }
        export default Movielist;

