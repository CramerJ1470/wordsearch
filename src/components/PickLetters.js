import React from 'react'

function PickLetters() {

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


    function pickletter(e) {
       let letterToCheck = e.target.textContent;
        let letterBlock = Number(e.target.name);
        //change block color to wgite to show its picked //
        e.target.classList.add("white");    
        // create object using class PickedGridBlock. Will be used to track color before selected, order in word, direction of word, grid location to check direction is correct //


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



   





  return (
   
}

export default PickLetters
