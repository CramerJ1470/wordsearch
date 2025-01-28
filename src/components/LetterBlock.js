import React, { Component } from 'react';


import './block.css';



const LetterBlock =({letterblock}) =>{
 
 const {location,index,picked,letter,lastcolor,backgroundcolor,classes,direction} = letterblock;


  let squarekey= location.toString()+letter.toString()+index.toString();

    return (
    <>
    <button  className="letterblock" key={squarekey} name={location}>
      
      {letter}
     </button>
     </>
  )

}

export default LetterBlock;
