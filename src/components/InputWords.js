import React , {useContext} from 'react';
import "./block.css";
import {useNavigate } from "react-router-dom";
import  WordListContext from "../context/WordListContext";

function InputWords() {
  
    const {wordList,setWordList} = useContext(WordListContext);
    console.log("input wordList:",wordList);
    
  
    let words1 =[];
    let wordSetUp = [];
    function submitIt() {
    

       for (let tenWords = 0; tenWords < 10; tenWords++) {
        let forName= `word${tenWords}`;
        console.log("forname:",forName);
        let newWordValue = document.getElementById(`word${tenWords}`).value;
    
        console.log("newWordValue:",newWordValue);
        words1.push(newWordValue);
    
       }
       
    setWordList(words1);
    document.getElementById("putwordhere").innerText = wordList;
    console.log("later Input words:",wordList);
    
    
     } 



   
     for (let iw=0;iw<10;iw++) {wordSetUp.push(iw);}
  return (
        <>
            <div className="vertflex">
                <form className="vertsetup fingercursor aligncenter " action="">
                    {wordSetUp.map((s,index) => {let forName= `word${index}`; return (<><div className="row rowflex" key={forName}><label className="col-sm-4 fingercursor rowflex" htmlFor={forName}>Word #{s+1}:</label><input className="col-sm-6 aligncenter fingercursor inputbox heavytext" type="text" id={forName} name={forName}/></div></>)})}
                    <button className="inputbox" onClick={submitIt} type="submit">Submit</button>
                    <div id="putwordhere"></div>
                </form>

    </div>
    <div id="newWords1"></div>
    </>
    
  )
}


export default InputWords;
