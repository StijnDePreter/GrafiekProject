import XAxis from "./XAxis"
import YAxis from "./YAxis"
import GridHorizontal from "./GridHorizontal"
import GridVertical from "./GridVertical"

function Graph(props) {
  const graphDimensions = {
    width: props.width,
    height: props.height
  }
  var topOfsets = Array.from({length: 10}, (_, i) => (props.height/10) *i);
  var LeftOfsets = Array.from({length: 10}, (_, i) => (props.width/10) *(i+1));

  return (
    <div className="graph" style={graphDimensions}>
      <YAxis height = {props.height} width = {props.width} />
      <XAxis height = {props.height} width = {props.width} />
      {topOfsets.map(Offset => 
        <GridHorizontal key={"TopOffset: " + Offset} topOffset = {Offset} width = {props.width} /> 
      )}
      {LeftOfsets.map(Offset => 
        <GridVertical key={"LeftOffset: " + Offset} leftOffset = {Offset} height = {props.height} /> 
      )}
      
    </div>
  );
}

export default Graph;