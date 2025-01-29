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
let gridBlocks = {};
let searchWords = wordList;
class GridBlock {
    constructor(index,loc,letter) {
        this.location = Number(loc);
        this.index = index;
        this.picked = false;
        this.letter =  letter;
        this.lastcolor = "rgb(95, 38, 109)";
        this.backgroundcolor = "rgb(95, 38, 109)";
        this.classes = ["letterblock"];
        this.direction ="";
    }
}

let gofind = false;
function buildGrid() {
  xlen = 15;
  ylen =15;
  xString="";
  let z = 0;
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
           gridBlocks[newLocation] = new GridBlock(z,newLocation);
           
      }
      
   }
      return builtgrid;
  }

// console.log("gridBlocks:",gridBlocks);

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
let indexFromObjects =[];
let vals = [];
function splitToShow(grid) {
  let newline = [];
  let totalLines=[];
  let len = Object.values(grid).length;
  vals = Object.values(grid);
  let index = Object.keys(grid);
  indexFromObjects = index;
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

let indexRow = [];
let indexRows =[];
let listLength = list.length;
let rows= [];
let row=[];

// Use indexFromObjects //

let list1 = vals;
let indexRow1 = [];
let indexRows1 =[];
let listLength1 = list1.length;
let rows1 = [];
let row1 =[];


for (let l = 0; l <= listLength;l++){
   
    if (l%15===0){rows1.push(row1);row1=[];let block = new GridBlock (l,indexFromObjects[l],list1[l]); row1.push(block);}
    else {let block = new GridBlock (l,indexFromObjects[l],list1[l]); row1.push(block);}
}


  // if (yadd===0 && l ===0) {rows.push("0000");}
    // if (l%15===0){rows.push(row);row=[];row.push(list[l]);indexRows.push(indexRow);indexRow=[];indexRow.push(indexFromObjects[l]);}
    //    else {row.push(list[l]);indexRow.push(indexFromObjects[l]);}
  

  


  rows1.shift();
 

  let checkedList = [];
let pickedWord ="";
let newWordList=[];
let letterIndex = 0;
 
  function startPlay() {
   
   document.getElementById("startplay").style.display="none";
   document.getElementById("foundword").style.visibility = "visible";
   document.getElementById("restartgame").style.visibility = "visible";

checkedList = wordList;
    let squares = document.querySelectorAll(".letterblock");
    gofind = true;
   
    for (const square of squares) {
      
      square.addEventListener("click",changecolor);
    
    }
      }
    //   function changecolor(e) {
    //     let letterToCheck = e.target.textContent;
    //     let letterBlock = e.target;
      
    //     e.target.classList.add("white");    
           
      
    //     for (let wc = 0; wc < checkedList.length; wc++) {
           

          
    //         if (checkedList[wc][letterIndex] === letterToCheck) {
    //             if (pickedWord.length == 0  && letterIndex==0) {pickedWord = letterToCheck;} 
    //             else if (pickedWord.length == letterIndex) {pickedWord=pickedWord+letterToCheck; }  
    //             newWordList.push(checkedList[wc]); 
    //             checkedList= newWordList;
    //             letterIndex++;
    //         } else if (checkedList.length === 0 || wc == checkedList.length-1 && pickedWord.length == letterIndex) {letterIndex = 0;console.log("letterIndex:",letterIndex);  console.log("start again!");letterBlock.classList.remove("white"); console.log("pickedWord elseIf:",pickedWord); pickedWord= "";console.log("checkedList elseif: ",checkedList);checkedList=[];wc=checkedList.length;
    //         } 
    //         // else if(){}
    //     }
        
    //     newWordList=[];
        
    //  }   
    function changecolor(e) {
        e.preventDefault();
        let letterToCheck = e.target.textContent;
        let target = e.target;
        // identify block picked name ie: 1205  //
        let letterLoc = Number(e.target.name);
        //change block color to write to show its picked //
        e.target.classList.add("white");    
        // create object using class PickedGridBlock. Will be used to track color before selected, order in word, direction of word, grid location to check direction is correct //
        let pickedWord = [];
        for (let wc = 0; wc < checkedList.length; wc++) {
             // if its the first letter  //
            if (checkedList[wc][letterIndex] === letterToCheck) {
                    if (pickedWord.length == 0  && letterIndex==0) {pickedWord[letterIndex] = new GridBlock(letterIndex, letterLoc, letterToCheck); 
                        pickedWord[letterIndex].picked = true; pickedWord[letterIndex].classes.push("white");pickedWord[letterIndex].backgroundcolor= "white"; 
                        newWordList.push(checkedList[wc]); 
                    } else if (letterIndex ===1) {let newDirNum = pickedWord[letterIndex-1].location-letterLoc; 
                        if (directNums.includes(newDirNum)) { 
                            console.log("great its next to the last letter!"); pickedWord[letterIndex-1].direction = newDirNum; 
                            pickedWord[letterIndex] = new GridBlock(letterIndex, letterLoc, letterToCheck); pickedWord[letterIndex].picked = true; 
                            pickedWord[letterIndex].classes.push("white");pickedWord[letterIndex].backgroundcolor= "white"; pickedWord[letterIndex].direction = newDirNum;
                            newWordList.push(checkedList[wc]); 
                        } else {console.log("first and second letters not next to each other");}
                    } else if (pickedWord.length == letterIndex) {let newDirNum = pickedWord[letterIndex-1].location-letterLoc; 
                        if (pickedWord[letterIndex-1].direction===newDirNum) {console.log("great its next to the last letter!"); 
                            pickedWord[letterIndex] = new GridBlock(letterIndex, letterLoc, letterToCheck); pickedWord[letterIndex].picked = true; 
                            pickedWord[letterIndex].classes.push("white");pickedWord[letterIndex].backgroundcolor= "white"; pickedWord[letterIndex].direction = newDirNum;
                            newWordList.push(checkedList[wc]); 
                        } else {console.log("two letters not following the corrent direction");
                        }
                    } else {console.log(`letter with word ${checkedList[wc]} doesn't work`);}
            } else if (checkedList.length === 0 || wc == checkedList.length-1 && pickedWord.length == letterIndex) {
                    //change all letters to yellow from newWordList //        
                letterIndex = 0;letterBlock.classList.remove("white"); 
                    pickedWord= [];checkedList=[];wc=checkedList.length; console.log("try another start letter!"); 
                    for (let cbc = 0; cbc < pickedWord.length; cdc++) {
                        pickedWord[cbc].direction = "";pickedWord[cbc].backgroundcolor = pickedWord[cbc].lastColor;
                    }
            } 
        }
        if (newWordList.length ===0) {
            console.log("letter didn't fit any words"); e.target.classList.remove("white");
        } else {          
            letterIndex++;
            checkedList=newWordList;
            newWordList=[];
        }
    } 

     function foundWord() {
    
        if (wordList.length ===1 && wordList[0] === pickedWord) { 
            alert("You've Found All The Words!!!");
        } else if (wordList.includes(pickedWord)) { 
            alert(`You found ${pickedWord}`); document.getElementById(`${pickedWord}`).style.color="rgb(95, 38, 109)";
            wordList = wordList.filter(e => e !== checkedList[0]);}
        else {alert("Word is not on the list");}
           
       
        pickedWord ='';
        newWordList = [];
        checkedList = wordList;
      
        letterIndex=0;
       
     }
  

     function restartgame() {
        window.location.reload();
     }
     async function saveboard() {

     }

     function closeAlert() {
        document.getElementById("alertwindow").classList.add("hiddenorig");
     }

    

  return (
    <>
    
    <div className="row padleft ohpercent padleft6" key="rows">
    
    <div id="alertwindow" className="padleft yellow hiddenorig"><p id="alertp">Start AlertLetter does not follow original set direction</p><button className="closeBtn" onClick={closeAlert}>
						X	
						</button></div>
            {rows1.map((row1,index) => {return <Row row1={row1} rowNum={index}/>})}
    </div>
     </>
  )
}

export default Grid
