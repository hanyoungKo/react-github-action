import React,{useState} from "react"
import './App.css';

function App() {
  const [counter,setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
       <h3 data-testid ="counter">{counter}</h3>
       <div style={{
        display:"flex",
        justifyContent:"space-between",
        width:"150px",
        height:"50px"
       }}>
          <button disabled={disabled} data-testid="minus-button" onClick={()=>{setCounter(counter - 1)}} style={{width:"50px" , backgroundColor:"red", color:"white"}} >-</button>
          <button disabled={disabled} data-testid="plus-button" onClick={()=>{setCounter(counter + 1)}} style={{width:"50px", backgroundColor:"black", color:"white"}}  >+</button>
       </div>
       <div>
          <button style={{backgroundColor:"white" , width: "80px" , height:"30px"}}
            data-testid="on/off-button"
            onClick={()=>{setDisabled(prev => !prev)}}
          >on/off</button>
       </div>
      </header>
    </div>
  );
}

export default App;
