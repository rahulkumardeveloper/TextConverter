import React, { useState } from 'react';


export default function Textarea(props) {
  const [text, setText] = useState("");

  const trimmedText = text.trim();
  const wordCount = trimmedText.length === 0 ? 0 : trimmedText.split(' ').length;

  const handleOnChange = (event) => {
    let newText = event.target.value;
    setText(newText);

  }
  const handleUpperCase = () => {
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText);
    props.showAlert("converted in to UpperCase", 'success')
  }
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted in to LowerCase", 'success')


  }
  const handleClear = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text cleard", 'success')
  }
  const handleTitleCase = () => {
    let newText = text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(newText);
    props.showAlert("converted in to Title Case", 'success')

  }

  const handleCopyText = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        props.showAlert("Text copyied to clipboard", 'success')
      })
      .catch(err => {
        props.showAlert("faild copyied to clipboard", 'success')
      });
  };
  const handleExtraSpace = () => {
    var cleanedString = text.split(' ')      // Split the string into an array of words
      .filter(word => word !== '')  // Filter out empty elements
      .join(' ');
    setText(cleanedString)
    props.showAlert("Remove extra spaces", 'success')

  }
  return (
    <>
      <div className='container my-3'>
        <div>
          <h3 className='mb-2 title' style={{ color: props.modeStatus === 'light' ? 'black' : 'white', backgroundColor: props.modeStatus === 'light' ? 'antiquewhite' : 'grey' }}> Please Enter Text </h3>
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
        <h3 className='my-3' style={{ color: props.modeStatus === 'light' ? 'black' : 'white' }}>Your Text Summary</h3>
        <div className="conatiner my-3 resultDiv">
          <h6> <u> Word Count </u>:<span>{wordCount}</span>&nbsp;
            <u>Charachter Count</u>:{text.trimEnd().length}<span></span></h6>
        </div>
        <h3 className='previewTitle'>Preview</h3>
        <div className='my-3'>
          <p style={{ color: props.modeStatus === 'light' ? 'black' : 'white' }}>{text.length > 0 ? text : "Please Enter Text for preview"}</p>
        </div>
      </div>
    </>
  );
}
