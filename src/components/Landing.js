import React from 'react';
import Directions from './Directions';
import Home from './Home';

function Landing() {
  return (
    <div>
        <div className="titleblock">
            SillyNFTier Wordsearch
        </div>
       <div className="directions">
          <Directions/>
        </div>
        <div className="home">
            <Home/>
        </div>
    </div>
  )
}

export default Landing
