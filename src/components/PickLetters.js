import React from 'react'

function PickLetters() {

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

  let directNums = [-1,-101, -100, -99, 1, 101, 100, 99];


    class PickedGridBlock {
        constructor(index,loc) {
            this.location = Number(loc);
            this.index = index;
            this.picked = false;
            this.letter = " ";
            this.lastcolor = "rgb(95, 38, 109)";
            this.backgroundcolor = "rgb(95, 38, 109)";
            this.classes = ["letterblock"];
            this.direction ="";
        }
    }

    function checkDir(first,second){
        
    }


function pickletter(e) {
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
                } else if (letterIndex ==1) {console.log(pickedWord[letterIndex-1].location,":",letterLoc);let newDirNum = pickedWord[letterIndex-1].location-letterLoc; 
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
    if (letterIndex == 0 && newWordList.length ===0) {
        console.log("letter didn't fit any words"); e.target.classList.remove("white");
    } else if (newWordList.length > 0) {
        console.log("letter didn't fit any words"); e.target.classList.remove("white");
    }    
    } else {          
        letterIndex++;
        checkedList=newWordList;
        newWordList=[];
    }
}  



function foundWord() {
    let wordToCheck = pickedWord.map((block) => {return block.letter;}).join("");
    console.log("wordToCheck:",wordToCheck);
         
    if (wordList.length ===1 && wordList[0] === wordToCheck) { document.getElementById(`${wordToCheck}`).style.color="rgb(95, 38, 109)";alert("You've Found All The Words!!!"); document.getElementById("startplay").classList.remove("hiddenorig");
    document.getElementById("foundword").classList.add("hiddenorig");
    document.getElementById("restartgame").classList.add("hiddenorig");document.getElementById("makeownwords").classList.remove("hiddenorig");
} else if (wordList.includes(wordToCheck)) { alert(`You found ${wordToCheck}`); document.getElementById(`${wordToCheck}`).style.color="rgb(95, 38, 109)";
    wordList = wordList.filter(e => e !== checkedList[0]);
    } else {alert("Word is not on the list");}
    
   
   
    pickedWord ='';
    newWordList = [];
    checkedList = wordList;
    letterIndex=0;
   
 }



   





  return (
   
}

export default PickLetters
