import React from 'react'

function PickLetters() {

    function pickletter(e) {
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
    //Grid  //
    <>
    <div className="row padleft ohpercent pad5">
       
        {rows1.map((row1) => {return <Row row1={row1}/>})}
    </div>
     </>



    // Row   change parameter to just row1 // 
    <div className="rowflex">
    {row1.map((letterblock) => {let letterToPick = Math.floor(Math.random()*26); if(letterblock.letter !== " ") { return <LetterBlock letterblock={letterblock}/>;} else {letterblock.letter = alphabet[letterToPick]; return <LetterBlock letterblock={letterblock}/>;}})}
  
</div>

    // LetterBlock change parameters to letterblock //

    <button  className="letterblock" key={squarekey} name={letterKey}>
      
    {letter.toUpperCase()}
   </button>
   </>


  )
}

export default PickLetters
