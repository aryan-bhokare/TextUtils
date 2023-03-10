import React, {useState} from 'react'

export default function Textforms(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");

    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");


    }
    const handleBoldClick = ()=>{
        var text = document.getElementById("myBox");
        text.style.fontWeight = "bold";
        props.showAlert("Converted to BOLD!","success");

    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const[text, setText] = useState('Enter text here');

  return (
    <>
    <div className='container' style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
        style={{backgroundColor: props.mode === 'dark'?'#000F1E':'white', color : props.mode === 'dark'?'white':'black '}}></textarea>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>  
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>              
        <button className="btn btn-primary mx-2 my-1" onClick={handleBoldClick}>Convert to BOLD</button>  
        </div>
    </div>
    <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    </div>
    </>
  )
}
