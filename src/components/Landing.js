import React , {useContext} from 'react';
import Directions from './Directions';
import Home from './Home';
import AuthContext from "../context/AuthContext";

function Landing() {
  const { setIsAuth, isAuth } = useContext(AuthContext);
 let registered = localStorage.getItem("registered");

  return (
    <>
    <div className="container-fluid">
    <div className="fullwidth pad5 row titleblock">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 centerdiv">
                    SillyNFTier Wordsearch
        </div>
        <div className="col-lg-3">
          
        </div>
    </div>
    </div>

        <div className="home">
            <Home registered={registered}/>
        </div>
        
        </>
    
  )
}

export default Landing
