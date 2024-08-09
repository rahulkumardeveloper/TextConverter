import React ,{useState} from 'react';

export default function Textarea() {

const [text,setText]=useState("Enter text");

const handleUpperCase=()=>{
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText)
}
const handleOnChange=(event)=>{
    let newText=event.target.value;
    setText(newText);

}
  return (
    <div>
     <h3 className='mb-4'> Enter Text For Convert TextUtilis</h3>
      <div class="input-group">
        <textarea class="form-control" aria-label="With textarea" rows="5" value={text} onChange={handleOnChange}></textarea>
        </div>
        <div className='mt-4'>
        <button className="btn btn-primary" onClick={handleUpperCase}>Upper Case</button>
        </div>
    </div>
  );
}
