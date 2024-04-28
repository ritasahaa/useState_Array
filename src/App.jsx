// import UseStateArray from './UseStateArray'
import { useState } from 'react';
import './App.css'

function App() {
  let bioData = [
    { id: 0, myName: "Rita", age: 26 },
    { id: 1, myName: "Thapa", age: 20 },
    { id: 2, myName: "sunil", age: 30 },
  ];
  console.log(bioData);

  const [myArray,setMyArray]=useState(bioData)
  
  const clearMe = () => {
    setMyArray([])
  }

  return (
    <>
      {
        myArray.map((curElm) => {
          return <h1 className='h1style' key={curElm.id}>Name: {curElm.myName} & Age: {curElm.age}</h1>
        })
      }
      <button className="btn" onClick={clearMe}>Clear</button>
      {/* <UseStateArray /> */}
    </>
  )
}

export default App
