import {useState} from 'react';
import { createPortal } from 'react-dom';
import Graph from "./Graph"

function App() {
  const [
    points,
    setPoints
  ] = useState([{ x: 100, y: 200},{ x: 150, y: 250},{ x: 300, y: 0}]);
  // console.log(points)



  console.log(points)
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Graph height= {300} width={500} points={points} addAPoint = {() => console.log(points.push({ x: 10, y: 20}))} /> */}
      {/* <Graph height= {300} width={500} points={points} addAPoint = {setPoints(oldArray => [...oldArray, { x: 10, y: 20}])} /> */}
      {/* dit hieronder werkt */}
      {/* <Graph height= {300} width={500} points={points} addAPoint = {() => setPoints(oldArray => [...oldArray, { x: 10, y: 20}])} /> */} 
      <Graph height= {300} width={500} points={points} addAPoint = {(newPoint) => setPoints(oldArray => [...oldArray, newPoint])} />
      {/* <Buttons/> */}
    </div>
  );
}
// punten toevoegen aan de array met onderstaande instructies.
// https://www.techiediaries.com/react-usestate-hook-update-array/
export default App;