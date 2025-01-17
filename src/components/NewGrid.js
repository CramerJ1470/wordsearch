import React from 'react';
import NewWords from './NewWords';
import Grid from './Grid';

function NewGrid({wordList}) {
    function buildGrid() {
        let xlen = 15;
        let ylen =15;
        let xString="";
        let builtgrid = {};
         for (let x = 1; x <= xlen;x++) {
        
        
            for (let y =1; y <= ylen;y++) {
                
                if (x < 10) {
                    let xlet = x.toString()
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


  return (
    <div>
         <div className="container-fluid ohpercent">
        <div className="row width">
        <div className="col-lg-3">
          <NewWords wordList={wordList}/>
        </div>
        <div className="col-lg-6">
          <Grid grid={grid}/>
        </div>
        <div className="col-lg-3">
        
        </div>
        </div>
      </div>
    </div>
  )
}

export default NewGrid
