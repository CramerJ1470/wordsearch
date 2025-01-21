import React, { Component } from 'react';


import './block.css';



const LetterBlock =({letter,index,rowNum}) =>{

  let squarekey= rowNum+letter+index;

  console.log(squarekey);

  
// function startword(e) {
//   console.log(e.target);
//   e.target.classList.add("purpleletter");
//   e.target.classList.add("picked");
//   e.target.parentNode.classList.add("picked");
//   e.target.parentNode.classList.add("purpleletter");

  
 
// }



// function changecolor(ax) {
//   document.getElementsByClassName("letterblock")[ax].classList.add("purpleletter");

// }
    // getSquare.addEventListener("mouseover", changeColor);

  return (
    <>
    <div  className="letterblock"  key={squarekey}>
      <p className="greentext">
      {letter.toUpperCase()}</p>
     </div>

     </>
  )

}

export default LetterBlock;
