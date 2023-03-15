import './App.css'
import { useState } from "react"

function App() {
  const [val, setVal] = useState("");

  const chnageInputHandler = (e) => {
    setVal(e.target.value);
    console.log(val)
  }
  return (
    <div className="App">
      <div className="container">
        <div className="innerContainer " style={{ width: `${val}%` }}>Bar</div>
      </div >
      < input type="number" value={val} onChange={chnageInputHandler} />
    </div >
  )
}

export default App;
