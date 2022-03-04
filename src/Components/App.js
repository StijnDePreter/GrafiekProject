import {useState} from 'react';
import Graph from "./Graph"
import PreviousButton from "./PreviousButton"
import NextButton from "./NextButton"
import Head from "./Head"


function App() {
  const [
    points,
    setPoints
  ] = useState([]);

  const [
    pointsInMemory,
    setPointsInMemory
  ] = useState([]);

  return (
    <div className="App">
      <Head/>
      <Graph height= {300} width={500} points={points} addAPoint = {(newPoint) => {setPoints(oldArray => [...oldArray, newPoint]); setPointsInMemory(oldArray => oldArray.slice(0,0) );}} />
      <div className="btn-group btn-group-lg" role="group">
        <PreviousButton removeAPoint = {
          () => {setPointsInMemory(oldArray => [...oldArray, points[points.length-1]]);setPoints(oldArray => oldArray.slice(0,-1)); }
        }/>
        <NextButton buttonActive = {(pointsInMemory.length > 0)} restoreAPoint = {
          () => {setPoints(oldArray => [...oldArray, pointsInMemory[pointsInMemory.length-1]]);setPointsInMemory(oldArray => oldArray.slice(0,-1)); }
        }/>
      </div>
    </div>
  );
}

export default App;