import React from 'react';
import Directions from './Directions';
import Home from './Home';

function Landing() {
  return (
    <>
     <div className="container-fluid ">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="centertext col-lg-8">
                <div className="titleblock centertext">
                    SillyNFTier Wordsearch
                </div>
            </div>
        <div className="col-lg-2"></div>
        </div>
        </div>
      
        <div className="home">
            <Home/>
        </div>
        
        </>
    
  )
}

export default Landing
