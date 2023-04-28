import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert('Converted to uppercase',"success")
  };
  const handleUpClickLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert('Converted to lowercase',"success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here");

  return (
    <>
      <div className="container" style={{backgroundColor:props.mode==='light'? 'white':'black'}}>
        <div className="mb-3">
          <label className="form-label">{props.heading}</label>
          <textarea
            onChange={handleOnChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            style={{backgroundColor:props.mode==='dark'? 'grey':'white',color:props.mode==='dark'? 'white':'black'}}
          ></textarea>
        </div>
        <button type="button" onClick={handleUpClick} className="btn btn-info">
          Convert to Uppercase
        </button>
        <button
          type="button"
          onClick={handleUpClickLower}
          className="btn btn-info mx-4"
        >
          Convert to Lowercase
        </button>
        <div className="container my-4" style={{backgroundColor:props.mode==='dark'? 'grey':'white',color:props.mode==='dark'? 'white':'black'}}>
          <h1>Your Text Summary</h1>
          <p>
            {(text.split(" ").length-1)} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <p>Preview-{text}</p>
        </div>
      </div>
    </>
  );
}
