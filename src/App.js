import React, { useState } from 'react';
import './App.css';

const App = () => {
  const[input,setInput]=useState();
  const[result,setResult]=useState();

  const changehandler = e =>{
    setInput(e.target.value);
    

  }


  return (
    <div className='calculator'>
      <input className='field' type='text' value={input} onChange={changehandler} placeholder='enter the values' /><br/>
      <button className='res' onClick={()=>{
        setResult(eval(input))
      }}>result</button><br/>
      <h1 className='result'> {result}</h1>

      <button onClick={()=>setInput(input+'1')}>1</button>
      <button onClick={()=>setInput(input+'2')}>2</button>
      <button onClick={()=>setInput(input+'3')}>3</button> 
      <button onClick={()=>setInput(input+'4')}>4</button> <br/>
      <button onClick={()=>setInput(input+'5')}>5</button>
      <button onClick={()=>setInput(input+'6')}>6</button> 
      <button onClick={()=>setInput(input+'7')}>7</button>
      <button onClick={()=>setInput(input+'8')}>8</button> <br/>
      <button onClick={()=>setInput(input+'9')}>9</button> 
      <button onClick={()=>setInput(input+'0')}>0</button> 
      <button  className='minus' onClick={()=>setInput(input+'-')}>-</button>
      <button className='star' onClick={()=>setInput(input+'*')}>*</button><br/>
      <button onClick={()=>setInput(input+'+')}>+</button>
      <button className='slash' onClick={()=>setInput(input+'/')}>/</button>
      <button onClick={()=>setInput(input+'^')}>^</button>
      
    </div>
  )
}

export default App
