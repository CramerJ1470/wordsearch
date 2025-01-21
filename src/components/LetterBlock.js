import React, { Component } from 'react';


import './block.css';



const LetterBlock =({letter,index,rowNum}) =>{

  let squarekey= rowNum.toString()+letter.toString()+index.toString();

    return (
    <>
    <button  className="letterblock" key={squarekey}>
      
      {letter.toUpperCase()}
     </button>
     </>
  )

}

export default LetterBlock;
