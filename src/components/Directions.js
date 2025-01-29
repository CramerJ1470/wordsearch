import React from 'react';
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

function Directions({grid,wordList}) {


  let gofind = false;
  let checkedList = [];
 let pickedWord = [];
  let newWordList=[];
  let letterIndex = 0;

  function startPlay() {
    document.getElementById("startplay").classList.add("hiddenorig");
    document.getElementById("foundword").classList.remove("hiddenorig");
    document.getElementById("restartword").classList.remove("hiddenorig");
    document.getElementById("restartgame").classList.remove("hiddenorig");

    document.getElementById("makeownwords").classList.add("hiddenorig");
    document.getElementById("restartgame").classList.remove("hiddenorig");
 checkedList = wordList;
     let squares = document.querySelectorAll(".letterblock");
     gofind = true;
    
     for (const square of squares) {
       
       square.addEventListener("click",changecolor);
     
     }
       }
      //  function changecolor(e) {
      //    let letterToCheck = e.target.textContent;
       
      //    let letterBlock = Number(e.target.name);
         
      //    e.target.classList.add("yellow");    
      //    for (let wc = 0; wc < checkedList.length; wc++) {
      //     if (checkedList[wc][letterIndex] === letterToCheck) {
      //            if (pickedWord.length == 0  && letterIndex==0) {pickedWord = letterToCheck;} 
      //            else if (pickedWord.length == letterIndex) {pickedWord=pickedWord+letterToCheck; }  
      //            newWordList.push(checkedList[wc]); 
           
              
      //        } else if (checkedList.length === 0 || wc == checkedList.length-1 && pickedWord.length == letterIndex) {letterIndex = 0;letterBlock.classList.remove("white");  pickedWord= "";checkedList=[];wc=checkedList.length;
      //        } 
      //        // else if(){}
      //    }
           
      //    letterIndex++;
      //    checkedList=newWordList;
      //    newWordList=[];
         
      // }  
      let directNums = [-1,-101, -100, -99, 1, 101, 100, 99];
       function openAlert() {
        document.getElementById("alertwindow").classList.remove("hiddenorig");
       }

       let alertWindow = document.getElementById("alertp");

      function changecolor(e) {
        e.preventDefault();
        let letterToCheck = e.target.textContent;
        let target = e.target;
        // identify block picked name ie: 1205  //
        let letterLoc = Number(e.target.name);
        //change block color to write to show its picked //
        e.target.classList.add("white");    
        // create object using class PickedGridBlock. Will be used to track color before selected, order in word, direction of word, grid location to check direction is correct //
      
       console.log("before wc checked:List;", checkedList);
       console.log("pickedWord before wc:",pickedWord);

        for (let wc = 0; wc < checkedList.length; wc++) {
             // if its the first letter  //
           
            if (checkedList[wc][letterIndex] === letterToCheck) {
                   
                    if (letterIndex==0) { pickedWord[letterIndex] = new GridBlock(letterIndex, letterLoc, letterToCheck); 
                        pickedWord[letterIndex].picked = true; pickedWord[letterIndex].classes.push("white");pickedWord[letterIndex].backgroundcolor= "white"; 
                        newWordList.push(checkedList[wc]); 
                        
                    } else if (letterIndex ===1) { pickedWord[letterIndex] = new GridBlock(letterIndex, letterLoc, letterToCheck);  let newDirNum = pickedWord[letterIndex-1].location-letterLoc; 
                        if (directNums.includes(newDirNum)) { 
                           pickedWord[letterIndex-1].direction = newDirNum; 
                            pickedWord[letterIndex].picked = true; 
                            pickedWord[letterIndex].classes.push("white");pickedWord[letterIndex].backgroundcolor= "white"; pickedWord[letterIndex].direction = newDirNum;
                            newWordList.push(checkedList[wc]); 
                        } else {openAlert(); alertWindow.textContent ="first and second letters not next to each other";}
                    } else if (pickedWord.length >= letterIndex) { pickedWord[letterIndex] = new GridBlock(letterIndex, letterLoc, letterToCheck); let newDirNum = pickedWord[letterIndex-1].location-letterLoc; 
                        if (pickedWord[letterIndex-1].direction===newDirNum) { 
                            pickedWord[letterIndex].picked = true; 
                            pickedWord[letterIndex].classes.push("white");pickedWord[letterIndex].backgroundcolor= "white"; pickedWord[letterIndex].direction = newDirNum;
                            newWordList.push(checkedList[wc]); 
                        } else {openAlert(); alertWindow.textContent ="two letters not following the current direction";
                        }
                    } else {openAlert(); alertWindow.textContent =`letter with word ${checkedList[wc]} doesn't work`;}
            } else if (checkedList.length === 0 || wc == checkedList.length-1 && pickedWord.length == letterIndex) {
              pickedWord[letterIndex] = new GridBlock(letterIndex, letterLoc, letterToCheck); 
              openAlert(); alertWindow.textContent =`letter doesn't work try another location`;
              
                // if(wc === checkedList.length-1)  {
                //   pickedWord[letterIndex] = new GridBlock(letterIndex, letterLoc, letterToCheck); openAlert(); alertWindow.textContent ="letter didn't fit any words"; clearWord();
                // }              

            // else if (checkedList.length === 0 || wc == checkedList.length-1 && pickedWord.length == letterIndex) {
            //         //change all letters to yellow from newWordList //        
            //     letterIndex = 0;letterBlock.classList.remove("white"); 
            //         pickedWord= [];checkedList=[];wc=checkedList.length; console.log("try another start letter!"); 
            //         for (let cbc = 0; cbc < pickedWord.length; cdc++) {
            //             pickedWord[cbc].direction = "";pickedWord[cbc].backgroundcolor = pickedWord[cbc].lastColor;
            //         }
            // } 
             }
            }     
        if (newWordList.length ===0) {
          console.log("newWordList a:",newWordList);
          openAlert(); alertWindow.textContent ="letter didn't fit any words"; console.log("pickedWord from letter no good:",pickedWord);clearWord(); console.log(wordList); checkedList=wordList; letterIndex=0;
        } else{          
          console.log("newWordList b:",newWordList);
            letterIndex++;
            checkedList=newWordList;
            newWordList=[];
            console.log("checkeList:",checkedList);
        }
    } 
      
  //     function foundWord() {
         
  //       if (wordList.length ===1 && wordList[0] === pickedWord) { document.getElementById(`${pickedWord}`).style.color="rgb(95, 38, 109)";alert("You've Found All The Words!!!"); document.getElementById("startplay").classList.remove("hiddenorig");
  //       document.getElementById("foundword").classList.add("hiddenorig");
  //       document.getElementById("restartgame").classList.add("hiddenorig");document.getElementById("makeownwords").classList.remove("hiddenorig");} else if (wordList.includes(pickedWord)) { alert(`You found ${pickedWord}`); document.getElementById(`${pickedWord}`).style.color="rgb(95, 38, 109)";
  //       wordList = wordList.filter(e => e !== checkedList[0]);
  //       } else {alert("Word is not on the list");}
        
       
       
  //       pickedWord ='';
  //       newWordList = [];
  //       checkedList = wordList;
  //       letterIndex=0;
       
  //    }

     function restartgame() {
      location.reload();
   }

   function restartword() {
    console.log("restart word");
        clearWord();
      
   }

   function clearWord() {

    let elems = document.getElementsByClassName("letterblock");
    console.log("clearword pickedword:",pickedWord);
     for (let pw = 0;pw< pickedWord.length; pw++) {
      let letter = pickedWord[pw].location; for (let el =0; el < elems.length; el++) {
        if (Number(elems[el].name) === letter) {elems[el].classList.remove("white");}
      }
    }  pickedWord=[];
   
  }

   
   function fwChangeColor() {
    let elems = document.getElementsByClassName("letterblock");

          for (let pw = 0;pw< pickedWord.length; pw++) {let letter = pickedWord[pw].location; for (let el =0; el < elems.length; el++) {if (Number(elems[el].name) === letter) {elems[el].classList.remove("white");elems[el].classList.add("yellow");}}}
          pickedWord = [];
   }

  
function foundWord() {
  
  let wordToCheck = pickedWord.map((block) => {return block.letter;}).join("");
   
       
  if (wordList.length ===1 && wordList[0] === wordToCheck) { 
    document.getElementById(`${wordToCheck}`).style.color="rgb(95, 38, 109)";
    fwChangeColor(true);
    openAlert(); alertWindow.innerText ="You've Found All The Words!!!"; 
    // document.getElementById("startplay").classList.remove("hiddenorig");
    document.getElementById("foundword").classList.add("hiddenorig");
    document.getElementById("restartgame").classList.add("hiddenorig");
    document.getElementById("restartword").classList.add("hiddenorig");
  } else if (wordList.includes(wordToCheck)) { 
    openAlert(); alertWindow.innerText =`You found ${wordToCheck}`; 
    document.getElementById(`${wordToCheck}`).style.color="rgb(95, 38, 109)";
    wordList = wordList.filter(e => e !== checkedList[0]);
    console.log("found new wordList:",wordList);
    fwChangeColor(true);
  } else {openAlert(); alertWindow.innerText ="Word is not on the list"; clearWord();}
  
 
 
  pickedWord =[];
  newWordList = [];
  checkedList = wordList;
  console.log("foundWord end checkedList:",checkedList);
  letterIndex=0;

}




  return (
    <div className="greentext rightside">
      <ul>Directions
        <li>If You want to add you own words press the Make My Own Words button and enter your (10) words</li>
        <li>Press Start button to begin</li>
        <li>click letters of word starting with the first letter</li>
        <li>Click Found Word button when you have selected all the letters of the word you found</li>
        <li>Have fun!</li>
        <li>We will be adding more functionality/features</li>

      </ul>
      <button id="startplay" className="startbtn bottombtn" onClick={startPlay}>Start</button>
    <button id="foundword" className="bottombutton hiddenorig"  onClick={foundWord}>Found Word</button>
    <button id="restartword" className="bottombutton hiddenorig"  onClick={restartword}>Restart Word</button>
    <button id="restartgame" className="bottombutton hiddenorig"  onClick={restartgame}>Restart Game</button>
    
    </div>

  )
}

export default Directions
