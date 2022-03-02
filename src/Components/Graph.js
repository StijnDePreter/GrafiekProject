import {useState} from 'react';
import XAxis from "./XAxis"
import YAxis from "./YAxis"
import GridHorizontal from "./GridHorizontal"
import GridVertical from "./GridVertical"
import Point from "./Point"

function Graph(props) {
  const graphDimensions = {
    width: props.width,
    height: props.height
  }
  var topOfsets = Array.from({length: 10}, (_, i) => (props.height/10) *i);
  var LeftOfsets = Array.from({length: 10}, (_, i) => (props.width/10) *(i+1));
  

  return (
    <div className="graph" style={graphDimensions} 
    // onClick={()=> props.addAPoint()} //dit werkt!
    //onClick={()=>(console.log(props.points))}
    onClick={()=> props.addAPoint({ x: 10, y: 20})}
    >
      <YAxis height = {props.height} width = {props.width} />
      <XAxis height = {props.height} width = {props.width} />
      {topOfsets.map(Offset => 
        <GridHorizontal key={"TopOffset: " + Offset} topOffset = {Offset} width = {props.width} /> 
      )}
      {LeftOfsets.map(Offset => 
        <GridVertical key={"LeftOffset: " + Offset} leftOffset = {Offset} height = {props.height} /> 
      )}
      {props.points.map(Pointcoordinates => 
        <Point key={"cooridinates: " + Pointcoordinates.x + ", " + Pointcoordinates.y} x = {Pointcoordinates.x} y = {Pointcoordinates.y} /> 
      )}
      
    </div>
  );
}

export default Graph;