import React ,{useState} from 'react';
export default function Textarea() {

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
const handleCopyText = () => {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Text copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
};
  return (
    <>
    <div>
     <h3 className='mb-2 title'> Please Enter Text </h3>
    <div className='mb-4'>
        <button className="btn btn-primary" onClick={handleUpperCase}>To Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>To Lower Case</button>
        <button className="btn btn-light mx-2" onClick={handleClear}>  <i className="fa-solid fa-trash"></i></button> <span><img src="" alt="" srcset="" /></span>
        <button className="btn btn-light mx-2" onClick={handleCopyText}>  <i className="fa-solid fa-copy"></i></button> <span><img src="" alt="" srcset="" /></span>
        </div>
      <div className="input-group">
        <textarea className="form-control" aria-label="With textarea" placeholder='Start Typing ....' rows="5" value={text} onChange={handleOnChange}></textarea>
        </div>
    </div>
      <h3 className='my-3'>Your Text Summary</h3>
    <div className="conatiner my-3 resultDiv">
    <h6> <u> Word Count </u>:<span>{text.split(" ").length}</span>&nbsp;
    <u>Charachter Count</u>:{text.length}<span></span></h6>
    </div>
      <h3 className='previewTitle'>Preview</h3>
    <div className='my-3'>
      <p>{text}</p>
    </div>
    </>
  );
}
