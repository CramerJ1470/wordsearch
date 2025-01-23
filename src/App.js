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
import RenderOnceContext from './context/RenderOnceContext';



export const App=()=> {

 
  const [wordList, setWordList] = useState([]);


  useEffect(() => {
    setWordList();
  }, [wordList]);
  

    

  return (

    
    <>

    <BrowserRouter>
   <WordListContext.Provider
					value={{
						wordList: wordList,
						setWordList,
					}}
				>
	    <Routes>
        <Route
           path="/"
           element={<Home wordList={wordList}/>}
        />
       
      
      <Route
           path="/home"
           element={<Home  />}
        />


       
      </Routes>
      </WordListContext.Provider>
    </BrowserRouter>
    </>
  );
}

