import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick =  (()=>{
        let newText = text.toUpperCase()
        setText(newText)
        
    })
    const handleOnChange =  (event)=>{
        setText(event.target.value)
    }
    
    const [text,setText] = useState("Enter Text Here")


  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label  className="form-label">
            {props.heading}
          </label>
          <textarea
            onChange={handleOnChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
          ></textarea>

        </div>
          <button type="button" onClick={handleUpClick} className="btn btn-info">Convert to Uppercase</button>
      </div>
    </>
  );
}
