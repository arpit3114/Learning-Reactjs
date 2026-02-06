import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 5
  let [counter, setCounter] = useState(15)

  const addValue = ()=>{
    // counter = counter +1
    if(counter < 20){
      setCounter(counter + 1)
    }
    else setCounter(counter)
  }

  const removeValue = ()=>{
    if(counter > 0){
      setCounter(counter-1)
    }
    else setCounter(counter)
  }

  return (
    <>
      <h1>React Working</h1>
      <h2>count Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
