import React from 'react';
import LetterBlock from './LetterBlock';
import './block.css';


function Row({row,rowNum,indexRow}) {
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 
  return (
    <div className="rowflex">
        {row.map((letter,index) => {let letterToPick = Math.floor(Math.random()*26); if(letter !== " ") { return <LetterBlock letter={letter} index={index} rowNum={rowNum} letterKey={indexRow[index]}/>;} else {letter = alphabet[letterToPick];return <LetterBlock letter={letter} index={index} rowNum={rowNum}/>;}})}
      
    </div>
  )
}

export default Row
