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
  
  const [
    mousePosition,
    setMousePosition
  ] = useState({ x: 0, y: 0});

  return (
    <div className="graph" style={graphDimensions} 
    onMouseMove={(e)=> setMousePosition({ x: e.nativeEvent.offsetY-5, y: e.nativeEvent.offsetX-10 })}
    onClick={()=> props.addAPoint(mousePosition)}
    >
      <YAxis height = {props.height} width = {props.width} />
      <XAxis height = {props.height} width = {props.width} />
      {topOfsets.map(Offset => 
        <GridHorizontal key={"TopOffset: " + Offset} topOffset = {Offset} width = {props.width} /> 
      )}
      {LeftOfsets.map(Offset => 
        <GridVertical key={"LeftOffset: " + Offset} leftOffset = {Offset} height = {props.height} /> 
      )}
      {props.points.map((Pointcoordinates ,index) => 
        <Point key={"point: " + index + "cooridinates: " + Pointcoordinates.x + ", " + Pointcoordinates.y} x = {Pointcoordinates.x} y = {Pointcoordinates.y} /> 
      )}
    </div>
  );
}

export default Graph;