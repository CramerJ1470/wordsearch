import React from 'react';
import './block.css';

function LetterBlock({letter}) {
  
  return (
    <div className="letterblock" key={letter}>
     <p className="greentext">{letter.toUpperCase()}</p>
    </div>
  )
}

export default LetterBlock
