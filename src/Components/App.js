import {useState} from 'react';
import { createPortal } from 'react-dom';
import Graph from "./Graph"
import PreviousButton from "./PreviousButton"
import NextButton from "./NextButton"


function App() {
  const [
    points,
    setPoints
  ] = useState([{ x: 100, y: 200},{ x: 150, y: 250},{ x: 300, y: 0}]);
  // console.log(points)
  const [
    pointsInMemory,
    setPointsInMemory
  ] = useState([{ x: 15, y: 30},{ x: 60, y: 60},{ x: 100, y: 100}]);



  console.log(points)
  console.log(pointsInMemory)
  return (
    <div className="App">
      {/* <Header/> */}
      <Graph height= {300} width={500} points={points} addAPoint = {(newPoint) => setPoints(oldArray => [...oldArray, newPoint])} />
      <form>
        <PreviousButton removeAPoint = {
          () => {setPointsInMemory(oldArray => [...oldArray, points[points.length-1]]);setPoints(oldArray => oldArray.slice(0,-1)); }
        }/>
        <NextButton />
      </form>
      
    </div>
  );
}
// punten toevoegen aan de array met onderstaande instructies.
// https://www.techiediaries.com/react-usestate-hook-update-array/
export default App;