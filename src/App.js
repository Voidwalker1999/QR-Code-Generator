import './App.css';
import QRCode from 'react-qr-code';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('')

  function handleChange(e){
    setText(e.target.value)
  }
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <QRCode value={text}/>

      <div className="input-here">
        <p>Enter your text here</p>
        <input type='text' value={text} onChange={(e)=>{handleChange(e)} }/>
      </div>
      
    </div>
  );
}

export default App;
