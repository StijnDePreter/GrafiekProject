
function Point(props){
    return (
      <svg className={"point"} height="10" width="10" style={{top: props.x, left: props.y}}>
        <circle cx="6" cy="6" r="3" stroke="white" strokeWidth="2"/>
      </svg> 
    );
  }

export default Point;