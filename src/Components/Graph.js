import XAxis from "./XAxis"
import YAxis from "./YAxis"


function Graph(props) {
  const graphDimensions = {
    width: props.width,
    height: props.height
  }
  return (
    <div className="graph" style={graphDimensions}>
      <YAxis height = {props.height} width = {props.width}/>
      <XAxis height = {props.height} width = {props.width}/>
      
    </div>
  );
}

export default Graph;