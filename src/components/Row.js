import React from 'react';
import LetterBlock from './LetterBlock';
import './block.css';


function Row({row1,rowNum}) {
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 
  
  return (
    
    <div className="rowflex" key={rowNum*Object.keys(row1).length} >
    {row1.map((letterblock,index) => {let letterToPick = Math.floor(Math.random()*26); if(letterblock.letter !== " ") { return <LetterBlock letterblock={letterblock}/>;} else {letterblock.letter = alphabet[letterToPick]; return <LetterBlock letterblock={letterblock} />;}})}
  </div>
  
  )
}

export default Row
