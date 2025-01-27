import logo from './logo.svg';
import './App.css';
import './index.css';
import {useState, useContext, useEffect, createContext} from 'react';
import { Routes, Route ,BrowserRouter} from "react-router-dom";
import Grid from "./components/Grid";
import Words from "./components/Words";
import NewWords from './components/NewWords';
import InputWords from './components/InputWords';
import NewGrid from './components/NewGrid';
import Home from "./components/Home";
import WordListContext from './context/WordListContext';
import AuthContext from "./context/AuthContext";
import RenderOnceContext from './context/RenderOnceContext';
import Landing from './components/Landing';



export const App=()=> {

  const [isAuth, setIsAuth] = useState();
  const [wordList, setWordList] = useState([]);


  useEffect(() => {
    setWordList();
  }, [wordList]);
  

    

  return (

    
    <>

    <BrowserRouter>
    <AuthContext.Provider value={{ isAuth: isAuth, setIsAuth }}>
   <WordListContext.Provider
					value={{
						wordList: wordList,
						setWordList,
					}}
				>
	    <Routes>
        <Route
           path="/"
           element={<Landing wordList={wordList} isAuth={isAuth}/>}
        />
       
      
      <Route
           path="/home"
           element={<Landing  />}
        />


       
      </Routes>
      </WordListContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>
    </>
  );
}

