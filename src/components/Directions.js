import React from 'react';

function Directions({grid,wordList}) {
  let gofind = false;
  let checkedList = [];
  let pickedWord ="";
  let newWordList=[];
  let letterIndex = 0;

  function startPlay() {
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
         e.target.classList.add("white");    
         for (let wc = 0; wc < checkedList.length; wc++) {
          if (checkedList[wc][letterIndex] === letterToCheck) {
                 if (pickedWord.length == 0  && letterIndex==0) {pickedWord = letterToCheck;} 
                 else if (pickedWord.length == letterIndex) {pickedWord=pickedWord+letterToCheck; }  
                 newWordList.push(checkedList[wc]); 
           
              
             } else if (checkedList.length === 0 || wc == checkedList.length-1 && pickedWord.length == letterIndex) {letterIndex = 0;letterBlock.classList.remove("white");  pickedWord= "";checkedList=[];wc=checkedList.length;
             } 
             // else if(){}
         }
           
         letterIndex++;
         checkedList=newWordList;
         newWordList=[];
         
      }  
      
      function foundWord() {
         
        if (wordList.length ===1 && wordList[0] === pickedWord) { document.getElementById(`${pickedWord}`).style.color="rgb(95, 38, 109)";alert("You've Found All The Words!!!"); document.getElementById("startplay").classList.remove("hiddenorig");
        document.getElementById("foundword").classList.add("hiddenorig");
        document.getElementById("restartgame").classList.add("hiddenorig");document.getElementById("makeownwords").classList.remove("hiddenorig");} else if (wordList.includes(pickedWord)) { alert(`You found ${pickedWord}`); document.getElementById(`${pickedWord}`).style.color="rgb(95, 38, 109)";
        wordList = wordList.filter(e => e !== checkedList[0]);
        } else {alert("Word is not on the list");}
        
       
       
        pickedWord ='';
        newWordList = [];
        checkedList = wordList;
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
