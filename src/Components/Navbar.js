import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {

  const [modeChange, setmodeChange] = useState();
  const [modeStatus, setmodeStatus] = useState("Dark Mode");

  const handleDarkMode = () => {
    if(modeStatus==='Dark Mode'){ 
      setmodeChange({
        color: 'white',
        backgroundColor: 'black',
    })
    setmodeStatus("Light Mode");
  }
else{
  setmodeChange({
    color: 'black',
    backgroundColor: '#f8f9fa'
})
setmodeStatus("Dark Mode");

}
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid" style={modeChange}>
          <a className="navbar-brand" href="/" style={modeChange}>{props.title}</a>
          <button className="navbar-toggler" style={modeChange} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                <a className="nav-link active" aria-current="page" href="/" style={modeChange}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={modeChange}>{props.about}</a>
              </li>
            </ul>
            {/* { } <form className="d-flex" role="search"> */}
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              <button className="btn btn-outline-success" style={modeChange} onClick={handleDarkMode}>{modeStatus}</button>
            {/* </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototype = {
  title: PropTypes.string,
  about: PropTypes.string
}
Navbar.defaultProps = {
  title: "Text1",
  about: "About Us"
}
