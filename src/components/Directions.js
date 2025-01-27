import React from 'react';

function Directions({grid,wordList}) {
  let gofind = false;
  let checkedList = [];
  let pickedWord ="";
  let newWordList=[];
  let letterIndex = 0;

  function startPlay() {
    console.log("start Play wordList:",wordList);
    document.getElementById("startplay").classList.add("hiddenorig");
    document.getElementById("foundword").classList.remove("hiddenorig");
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
       function changecolor(e) {
         let letterToCheck = e.target.textContent;
         let letterBlock = Number(e.target.name);
         console.log("Letterblock:",letterBlock);
         e.target.classList.add("white");    
         console.log(letterToCheck);   
         console.log("checkedList:",checkedList) ;
         console.log("letterIndexCC: ",letterIndex);
         for (let wc = 0; wc < checkedList.length; wc++) {
             console.log("wc :",wc);

 
             console.log(checkedList[wc][letterIndex]);
             if (checkedList[wc][letterIndex] === letterToCheck) {
                 if (pickedWord.length == 0  && letterIndex==0) {pickedWord = letterToCheck;} 
                 else if (pickedWord.length == letterIndex) {pickedWord=pickedWord+letterToCheck; }  
                 newWordList.push(checkedList[wc]); 
                 console.log("inside newWorldList:",newWordList);
              
             } else if (checkedList.length === 0 || wc == checkedList.length-1 && pickedWord.length == letterIndex) {letterIndex = 0;console.log("letterIndex:",letterIndex);  console.log("start again!");letterBlock.classList.remove("white"); console.log("pickedWord elseIf:",pickedWord); pickedWord= "";console.log("checkedList elseif: ",checkedList);checkedList=[];wc=checkedList.length;
             } 
             // else if(){}
         }
           
         letterIndex++;
         checkedList=newWordList;
         newWordList=[];
         
      }  
      
      function foundWord() {
         
        if (wordList.length ===1 && wordList[0] === pickedWord) { document.getElementById(`${pickedWord}`).style.color="rgb(95, 38, 109)";alert("You've Found All The Words!!!"); document.getElementById("makeownwords").classList.remove("hiddenorig");} else if (wordList.includes(pickedWord)) { alert(`You found ${pickedWord}`); document.getElementById(`${pickedWord}`).style.color="rgb(95, 38, 109)";console.log("word");
        wordList = wordList.filter(e => e !== checkedList[0]);
        console.log("shorter checkedList:",wordList);} else {alert("Word is not on the list");console.log("checkedList:",checkedList,",wordlist:",wordList,",letterIndex:",letterIndex);}
        
       
       
        pickedWord ='';
        newWordList = [];
        checkedList = wordList;
        console.log("new CheckList:",checkedList); 
        letterIndex=0;
       
     }

     function restartgame() {
      location.reload();
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
      <button id="startplay" className="startbtn bottombtn hiddenorig" onClick={startPlay}>Start</button>
    <button id="foundword" className="bottombutton hiddenorig"  onClick={foundWord}>Found Word</button>
    <button id="restartgame" className="bottombutton hiddenorig"  onClick={restartgame}>Restart Game</button>
    </div>

  )
}

export default Directions
