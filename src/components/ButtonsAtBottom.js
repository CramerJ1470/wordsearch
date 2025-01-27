import React from 'react'

function ButtonsAtBottom({grid,wordList}) {
    let gofind = false;
    let checkedList = [];
    let pickedWord ="";
    let newWordList=[];
    let letterIndex = 0;

    function startPlay() {
        console.log("start Play wordList:",wordList);
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
           function changecolor(e) {
             let letterToCheck = e.target.textContent;
             let letterBlock = Number(e.target.name);
             console.log("Letterblock:",letterBlock);
             e.target.classList.add("white");    
             console.log(letterToCheck);    
             console.log("letterIndexCC: ",letterIndex);
             for (let wc = 0; wc < checkedList.length; wc++) {
                 console.log("wc :",wc);
     
                 console.log(checkedList[wc][letterIndex]);
                 if (checkedList[wc][letterIndex] === letterToCheck) {
                     if (pickedWord.length == 0  && letterIndex==0) {pickedWord = letterToCheck;} 
                     else if (pickedWord.length == letterIndex) {pickedWord=pickedWord+letterToCheck; }  
                     newWordList.push(checkedList[wc]); 
                     checkedList= newWordList;
                     letterIndex++;
                 } else if (checkedList.length === 0 || wc == checkedList.length-1 && pickedWord.length == letterIndex) {letterIndex = 0;console.log("letterIndex:",letterIndex);  console.log("start again!");letterBlock.classList.remove("white"); console.log("pickedWord elseIf:",pickedWord); pickedWord= "";console.log("checkedList elseif: ",checkedList);checkedList=[];wc=checkedList.length;
                 } 
                 // else if(){}
             }
             
             newWordList=[];
             
          }   
          
     
          function foundWord() {
         
             if (wordList.length ===1 && wordList[0] === pickedWord) { alert("You've Found All The Words!!!");} else if (wordList.includes(pickedWord)) { alert(`You found ${pickedWord}`); document.getElementById(`${pickedWord}`).style.color="rgb(95, 38, 109)";console.log("word");
             wordList = wordList.filter(e => e !== checkedList[0]);
             console.log("shorter checkedList:",wordList);} else {alert("Word is not on the list");console.log("checkedList:",checkedList,",wordlist:",wordList,",letterIndex:",letterIndex);}
             
            
            
             pickedWord ='';
             newWordList = [];
             checkedList = wordList;
             console.log("new CheckList:",checkedList); 
             letterIndex=0;
            
          }
       
     
          function restartgame() {
             window.location.reload();
          }
          async function saveboard() {
     
          }




  return (
    
      <div className="padleft">
   
    <button id="foundword" className="bottombutton hiddenorig"  onClick={foundWord}>Found Word</button>
    <button id="restartgame" className="bottombutton hiddenorig"  onClick={restartgame}>Restart Game</button>
    <button id="saveboard" className="bottombutton hiddenorig"  onClick={saveboard}>Save Board</button>
    
    </div>
    
  )
}

export default ButtonsAtBottom
