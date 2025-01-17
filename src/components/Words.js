import React , {useContext} from 'react';
import WordListContext from '../context/WordListContext';
import RenderOnceContext from '../context/RenderOnceContext';



function Words() {
 
  let wordList = ["BENIGN","BEING","BEET","BEIGE","HINTING","NIGHT","EIGHT","THING","ENGINE","GENIE"];
  // const {renderOnce, setRenderOnce} = useContext(RenderOnceContext);
  let words1 =[];
  let wordSetUp = [];
 
   let searchWords= wordList;
 

   function makeOwnWords() {
  
    let newWordDoc = document.getElementById("newWords");
    newWordDoc.style.display="none";
    let inputWordDoc = document.getElementById("inputWords");
    inputWordDoc.style.display = "inline";

   
    for (let iw=0;iw<10;iw++) {wordSetUp.push(iw);}
    function submitIt() {
    

       for (let tenWords = 0; tenWords < 10; tenWords++) {
        let forName= `word${tenWords}`;
        console.log("forname:",forName);
        let newWordValue = document.getElementById(`word${tenWords}`).value;
        console.log("newWordValue:",newWordValue);
        words1.push(newWordValue);
    
       }
    
   }


 
   
   
    
  
   
       
    setWordList(words1);
    document.getElementById("putwordhere").innerText = wordList;
    console.log("later Input words:",wordList);

   
    
    
     } 
  return (
    <>
    <div id="newWords">
    <div className="vertflex" >
      
      {searchWords.map((word)=> {return <><div className="word" key={word}>{word}</div></>})}
    </div>
    <button onClick={makeOwnWords(wordList)}>Make My Own Words</button>
    </div>
    <div id="inputWords">
    <div className="vertflex">
                <form className="vertsetup fingercursor aligncenter " action="">
                    {wordSetUp.map((s,index) => {let forName= `word${index}`; return (<><div className="row rowflex" key={forName}><label className="col-sm-4 fingercursor rowflex" htmlFor={forName}>Word #{s+1}:</label><input className="col-sm-6 aligncenter fingercursor inputbox heavytext" type="text" id={forName} name={forName}/></div></>)})}
                    <button className="inputbox" onClick={submitIt} type="submit">Submit</button>
                    <div id="putwordhere"></div>
                </form>

    </div>
    </div>
    </>

  )
}

export default Words
