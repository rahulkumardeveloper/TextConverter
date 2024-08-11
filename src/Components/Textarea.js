import React ,{useState} from 'react';


export default function Textarea(props) {
const [text,setText]=useState("");

const handleUpperCase=()=>{
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText)
}
const handleOnChange=(event)=>{
    let newText=event.target.value;
    setText(newText);

}
const handleLowerCase=()=>{
    let newText=text.toLowerCase();
    setText(newText);

}
const handleClear=()=>{
  let newText='';
  setText(newText);
}
const handleTitleCase=()=>{
  let newText=text.toLowerCase().split(' ').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  setText(newText);
}

const handleCopyText = () => {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Text copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
};
const handleExtraSpace=()=>{
// let newText= text.split(" ").filter((word)=>{ return word !==" "}).join(" ");
// setText(newText);
var cleanedString = text.split(' ')      // Split the string into an array of words
                          .filter(word => word !== '')  // Filter out empty elements
                          .join(' '); 
   setText(cleanedString)
}
  return (  
    <>
    <div>
     <h3 className='mb-2 title' style={{color:props.modeStatus==='light'? 'black':'white',backgroundColor:props.modeStatus==='light'? 'antiquewhite':'grey'}}> Please Enter Text </h3>
    <div className='mb-4'>
        <button className="btn btn-light" onClick={handleUpperCase}>To Upper Case</button>
        <button className="btn btn-light mx-2" onClick={handleLowerCase}>To Lower Case</button>
        <button className="btn btn-light mx-2" onClick={handleTitleCase}>Title Case</button>
        <button className="btn btn-light mx-2" onClick={handleExtraSpace}>Remove Extra space</button>
        <button className="btn btn-light mx-2" onClick={handleClear}>  <i className="fa-solid fa-trash"></i></button>
        <button className="btn btn-light mx-2" onClick={handleCopyText}>  <i className="fa-solid fa-copy"></i></button>
       
        </div>
      <div className="input-group">
        <textarea className="form-control" aria-label="With textarea" placeholder='Start Typing ....' rows="5" value={text} onChange={handleOnChange}></textarea>
        </div>
    </div>
      <h3 className='my-3' style={{color:props.modeStatus==='light'? 'black':'white'}}>Your Text Summary</h3>
    <div className="conatiner my-3 resultDiv">
    <h6> <u> Word Count </u>:<span>{text.split(" ").length}</span>&nbsp;
    <u>Charachter Count</u>:{text.length}<span></span></h6>
    </div>
      <h3 className='previewTitle'>Preview</h3>
    <div className='my-3'>
      <p style={{color:props.modeStatus==='light'? 'black':'white'}}>{text.length>0? text:"Please Enter Text for preview"}</p>
    </div>
    </>
  );
}
