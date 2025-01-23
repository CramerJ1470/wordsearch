import React , {useState, useContext} from 'react';
import Grid from "./Grid";
import Words from "./Words";
import InputWords from './InputWords';
import WordListContext from '../context/WordListContext';
import Directions from './Directions';
import "./block.css";

const {rendered} = require("./rendered");

// console.log(rendered);


let rendered1 = rendered;


let wordList1= ["BENIGN","BEING","BEET","BEIGE","HINTING","NIGHT","EIGHT","THING","ENGINE","GENIE"];
function Home() {

     
const [wordList,setWordList] = useState(wordList1);

// console.log("Grid wordList: ",wordList);
    function buildGrid() {
        let xlen = 15;
        let ylen =15;
        let xString="";
        let builtgrid = {};
         for (let x = 1; x <= xlen;x++) {
        
        
            for (let y =1; y <= ylen;y++) {
                
                if (x < 10) {
                    let xlet = x.toString();
                    xString = "0"+ xlet;
                } else { xString =x.toString();}
        
                // console.log("y:",y.toString(),"x:",xString);   
                 let newLocation = Number(y.toString()+xString);
                 builtgrid[newLocation]=" ";
            }
         }
            return builtgrid;
        }
    
          let grid1 = buildGrid();
    
          const [grid, setGrid] = useState(grid1);

        
          // const {renderOnce, setRenderOnce} = useContext(RenderOnceContext);
          let words1 =[];
          let wordSetUp = [];
         
           
         
        
           function makeOwnWords() {
          
            let newWordDoc = document.getElementById("newWords");
            newWordDoc.style.display="none";
            let inputWordDoc = document.getElementById("inputWords");
            inputWordDoc.style.display = "inline";
           }
           
            for (let iw=0;iw<10;iw++) {wordSetUp.push(iw);}
            function submitIt() {
            
        
               for (let tenWords = 0; tenWords < 10; tenWords++) {
                let forName= `word${tenWords}`;
                // console.log("forname:",forName);
                let newWordValue = document.getElementById(`word${tenWords}`).value;
                // console.log("newWordValue:",newWordValue);
                words1.push(newWordValue);
            
               }
               setWordList(words1);

               let newWordDoc = document.getElementById("newWords");
               newWordDoc.style.display="inline";
               let inputWordDoc = document.getElementById("inputWords");
               inputWordDoc.style.display = "none";
              //  console.log("LATER WORDlIST:",wordList);hW
             
           }
          

           let searchWords = wordList;


  return (
    <div className="home1">
      <img className="wholebg bgpic"/>
         <div className="container-fluid ">
        <div className="row width">
        <div className=" col-lg-3 directions">
          <Directions/>
        </div>
    
     
        <div className="col-lg-6">
          <Grid grid={grid} wordList={wordList}/>
        </div>
    
        <div className="col-lg-3 padleft">
    
        <div id="newWords"  className="rightside">
    <div className="vertflex " >
      {searchWords.map((word)=> {return <><div className="word" id={word} key={word}>{word}</div></>})}
    </div>
    <button className="bottomb" onClick={makeOwnWords}>Make My Own Words</button>
    </div>
    <div id="inputWords" >
    <div className="vertflex">
                <div className="vertsetup fingercursor aligncenter inputside" action="">
                    {wordSetUp.map((s,index) => {let forName= `word${index}`; return (<><div className="row rowflex" key={forName}><label className="col-sm-6 inputpad rowflex1" htmlFor={forName}>Word #{s+1}:</label><input className="col-sm-6 aligncenter fingercursor inputbox heavytext" type="text" id={forName} name={forName}/></div></>)})}
                    <button className="bottombtn" onClick={submitIt} type="submit">Submit</button>
                    <div id="putwordhere"></div>
                </div>

    </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Home
