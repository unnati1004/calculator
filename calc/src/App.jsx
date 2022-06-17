
import { useState } from 'react';
import './App.css';

function App() {
  const [res,setRes]= useState("");

  const handle=(event)=>{
    setRes(res.concat(event.target.value))
  }
  const clear =()=>{
    setRes("")
  }

  const handleSubmit =()=>{
    setRes(eval(res))
  }
  return (
    <div className="App">
      <input type="text" placeholder='0' value={res} />
      <div className='but'>
        <button onClick={handle} value={9}>9</button>
        <button onClick={handle} value={8} >8</button>
        <button onClick={handle} value={7}>7</button>
        <button onClick={handle} value={6}>6</button>
        <button onClick={handle} value={5}>5</button>
        <button onClick={handle} value={4}>4</button>
        <button onClick={handle} value={3}>3</button>
        <button onClick={handle} value={2}>2</button>
        <button onClick={handle} value={1}>1</button>
        <button onClick={handle} value={"+"}>+</button>
        <button onClick={handle} value={"-"}>-</button>
        <button onClick={handle} value={"*"}>*</button>
        <button onClick={handle} value={"."}>.</button>
        <button onClick={handle} value={"/"}>/</button>
        <button onClick={clear}>Clear</button>
        <button onClick={handleSubmit}>=</button>
      </div>
    </div>
  );
}

export default App;
