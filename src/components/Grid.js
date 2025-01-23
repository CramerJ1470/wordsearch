import React , {useContext} from 'react';
import LetterBlock from './LetterBlock';
import Row from './Row';
import WordListContext from '../context/WordListContext';


let xlen = 15;
let ylen =15;
let xString="";
let grid={};
let randonTempGrid = {};
let tempWord= [];

const topleft= ["e","f","g"];
const topmiddle = ["a","e","f","g","h"];
const righttop =["a","g","h"];
const leftmiddle = ["c","d","e","f","g"];
const middle = ["a","b","c","d","e","f","g","h"];
const rightmiddle = ["a","b","c","g","h"];
const bottomleft =["c","d","e"];
const bottommiddle =["a","b","c","d","e"];
const rightbottom =["a","b","c"];
let doesItFit1=false;


function Grid({grid, wordList}) {

let searchWords = wordList;

let gofind = false;
function buildGrid() {
  xlen = 15;
  ylen =15;
  xString="";
  let builtgrid = {};
   for (let x = 1; x <= xlen;x++) {
  
  
      for (let y =1; y <= ylen;y++) {
         
         if (x< 10) {
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



const addWordToGrid =(tempWord,grid)=> {
  let numberObjects = [];
  let valueObjects = [];
  for (let nloop = 0; nloop < tempWord.length; nloop++) {
  numberObjects.push(Object.keys(tempWord[nloop]));
  valueObjects.push(Object.values(tempWord[nloop]));

  }
for (let aa = 0; aa < numberObjects.length; aa++) {grid[numberObjects[aa][0]] = valueObjects[aa][0]; }
 };   


const checkWords = (sortedSearchWords) => {
    for (let wordsloop = 0; wordsloop < sortedSearchWords.length; wordsloop++){
           let word = sortedSearchWords[wordsloop];
           let rangridItems  = buildGrid();
           let numbers = Object.keys(rangridItems);
           let nl = numbers.length;
      
           // rgloop = rangrid loop where a randdom location is used in rangrid the removed from rangrid until a match or no rangrid locations are left. //
   
           while (nl > 0) {
               // get a randgrid random index //
               let rgi = Math.floor(Math.random()*nl);

               let key = numbers[rgi];
               let ranLoc = key;

           //   console.log("randgridItem = ",rangridItem, ":",rangridItems[rangridItem]);
           // rlds === random location  directions //
   
           let rlds = getCheckArr(ranLoc);
              let tempRlds = rlds;
           for (let rldsloop = 0;rldsloop < rlds.length; rlds++) {
               //get a random location use and then remove //
               let ranRldsInd = Math.floor(Math.random()*tempRlds.length);
               // dtu = direction to use //
               let dtu = tempRlds[ranRldsInd];
               // da === direction amount amount to change key to find next grid block to check //
               let da = getDirectionNum(dtu); 
               let newLocationToCheck = ranLoc;
               let wordLength = word.length;
       
       tempWord=[];
       for (let checkit = 0; checkit < wordLength; checkit++) {
           newLocationToCheck= newLocationToCheck.toString();
           if (word===sortedSearchWords[0] && checkit === 0 ) {let nlc = {};nlc[newLocationToCheck]= word[checkit];tempWord.push(nlc);nlc =                    {};                     newLocationToCheck = (Number(newLocationToCheck) + Number(da)).toString();}
               else if (grid[newLocationToCheck] === undefined) { doesItFit1= false; checkit=wordLength;
                   }
               
               else if (checkit >= 0 && grid[newLocationToCheck] !== undefined) {
                  if (checkit=== wordLength-1 && grid[newLocationToCheck] === word[checkit]){ 
                    //    console.log("last newLocationToCheck letter ",grid[newLocationToCheck]," matches word letter ,",word[checkit], ", adding ",{newLocationToCheck:word[checkit]}, "to tempword");
                       let nlc = {};nlc[newLocationToCheck]= word[checkit];tempWord.push(nlc);nlc = {};
                    //    console.log("tempWord:",tempWord);
                    //    console.log("It Works"); 
                       addWordToGrid(tempWord,grid); tempWord =[]; splitToShow(grid);doesItFit1 = true;checkit=wordLength;
                   }   else if (grid[newLocationToCheck] !== undefined && grid[newLocationToCheck] === " "){ 
                    //    console.log("newLocationToCheck ",grid[newLocationToCheck]," location is empty and on grid, adding {" ,newLocationToCheck,":",word[checkit], "} to tempword");
                       let nlc = {};nlc[newLocationToCheck]= word[checkit];tempWord.push(nlc);nlc = {};
                    //    console.log("tempWord1:",tempWord);
                       doesItFit1 = true;
                       if (checkit ===word.length-1 && doesItFit1=== true) {
                        // console.log("word to add:",tempWord);
                        addWordToGrid(tempWord,grid); tempWord=[]; splitToShow(grid); 
                        // console.log("addword************");
                        checkit = wordLength;
                        // console.log("fit word:",Object.values(tempWord).join());
                    }
                   } else if (grid[newLocationToCheck] !== undefined && grid[newLocationToCheck] === word[checkit]){ 
                        //    console.log("newLocationToCheck letter ",grid[newLocationToCheck]," matches word letter ,",word[checkit], ", adding ",{newLocationToCheck:word[checkit]}, "to tempword");
                           let nlc = {};nlc[newLocationToCheck]= word[checkit];tempWord.push(nlc);nlc = {};
                        //    console.log("tempWord2:",tempWord);
                           doesItFit1 = true;
                           if (checkit ===word.length-1 && doesItFit1=== true) {addWordToGrid(tempWord,grid); tempWord=[]; splitToShow(grid);
                            //  console.log("addword************"); checkit=wordLength; console.log("fit word:",Object.values(tempWord).join());
                            }    
                   } else if (grid[newLocationToCheck] !== undefined && grid[newLocationToCheck] !== word[checkit]){ 
                    //    console.log("newLocationToCheck letter ",grid[newLocationToCheck]," does not match word letter ,",word[checkit], "next new randomLocation");
                        tempWord = [];doesItFit1 = false; checkit=wordLength;
                   }
                   
                   newLocationToCheck = (Number(newLocationToCheck) + Number(da)).toString();
               } 
           } 
               if (doesItFit1 === true) {nl = 0;  splitToShow(grid);} else if (doesItFit1 === false) {tempWord = [];
               numbers.splice(rgi,1);
             nl = numbers.length;
       
           }
           
   
           }
           
       }
       }
   };

function sortWords(searchWords) {
    searchWords.sort((a, b) => b.length - a.length);
    return searchWords;
}

let fitcount = 0;
const getDirectionNum =(direction) =>{
  fitcount = 0;
  if (direction === "a") {
      return -1;
  } else if (direction === "b") {
      return -101;
  } else if (direction === "c") {
      return  -100;
  } else if (direction === "d") {
      return -99;  } else if (direction === "e") {
      return +1;
  } else if (direction === "f") {
      return 101;
  } else if (direction === "g") {
      return 100;
  } else if (direction === "h") {
      return 99;
  } 
};


const getCheckArr = (newLocation) => {
  if (newLocation === 101) {
      return topleft;
  } else if (newLocation === 1515) {
      return rightbottom;
  }else if (newLocation >101 && newLocation < 115) {
      return topmiddle;
  } else if (newLocation === 1501) {
      return bottomleft;
  } else if (newLocation ===115) {
      return righttop;
  } else if ((newLocation-1)%100 ===0)    {
     return leftmiddle;
  } else if ( (newLocation-15)%10 ===0 && (newLocation > 115 || newLocation < 1515)) {
      return rightmiddle;
  } else if (newLocation > 1501 && newLocation < 1515) {
      return bottommiddle;
  } else {
      return middle;
  }
};

let vals = [];
function splitToShow(grid) {
  let newline = [];
  let totalLines=[];
  let len = Object.values(grid).length;
  vals = Object.values(grid);
  let index = Object.keys(grid);
  let z=0;
  for (let b = 0; b < len+1;b++) {
      if (z == 15) { }
      else {
      let a =  vals[b];
      let indexN = index[b];
      let lastTwo = indexN.slice(indexN.length-2);
      lastTwo = Number(lastTwo);
            
      if ((lastTwo) === 15 || index[b] === 115) {
          z++;
          newline.push(a);let newlineword = newline.join("");
          totalLines.push(newlineword);
          newline = [];
      } else { newline.push(a);
  
      }
  }
      
  }
}
grid = buildGrid();
// let randomCheckGrid = Object.keys(grid);
const sortedSearchWords =sortWords(searchWords);
checkWords(sortedSearchWords);

let list = vals;


let listLength = list.length;
let rows= [];
let row=[];

for (let l = 0; l <= listLength;l++){
  // if (yadd===0 && l ===0) {rows.push("0000");}
    if (l%15===0){rows.push(row);row=[];row.push(list[l]);}
       else row.push(list[l]);
  }
  let checkedList = [];
let pickedWord ="";
let newWordList=[];
let letterIndex = 0;

  function startPlay() {
   console.log("start Play wordList:",wordList);
   document.getElementById("startplay").style.visibility = "hidden";
   document.getElementById("foundword").style.display = "block";
checkedList = wordList;
    let squares = document.querySelectorAll(".letterblock");
    gofind = true;
   
    for (const square of squares) {
      
      square.addEventListener("click",changecolor);
    
    }
      }
      function changecolor(e) {
        let letterToCheck = e.target.textContent;
        e.target.classList.add("white");        
        for (let wc = 0; wc < checkedList.length; wc++) {
            if (checkedList[wc][letterIndex] === letterToCheck) {
                if (pickedWord.length == 0  && letterIndex==0) {pickedWord = letterToCheck;} 
                else if (pickedWord.length == letterIndex) {pickedWord=pickedWord+letterToCheck; }  
                newWordList.push(checkedList[wc]); 
            }
        }
        checkedList= newWordList;
        newWordList=[];
        letterIndex++;
     }   
     

     function foundWord() {
        if (wordList.length ===1 && wordList[0] === pickedWord) { alert("You've Found All The Words!!!");} else { alert(`You found ${pickedWord}`); }
        console.log("word");
        wordList = wordList.filter(e => e !== checkedList[0]);
        console.log("shorter checkedList:",wordList);
       
        document.getElementById(`${pickedWord}`).style.color="rgb(95, 38, 109)";
        pickedWord ='';
        newWordList = [];
        checkedList = wordList;
        console.log("new CheckList:",checkedList); 
        letterIndex=0;
     }
  

  return (
    <>
    <div className="row padleft ohpercent pad5">
       
        {rows.map((row,index) => {return <Row row={row} rowNum={index}/>})}
    </div>
 
    <div className="padleft">
    <button id="startplay" className="bottombutton" onClick={startPlay}>Start</button>
    </div>
 
    <div className="padleft"> 
    <button id="foundword" className="bottombutton"  onClick={foundWord}>Found Word</button>
    </div>
  
    </>
  )
}

export default Grid
