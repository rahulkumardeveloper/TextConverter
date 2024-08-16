import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

  //   const [modeChange, setmodeChange] = useState();
  //   const [modeStatus, setmodeStatus] = useState("Dark Mode");

  //   const handleDarkMode = () => {
  //     if(modeStatus==='Dark Mode'){ 
  //       setmodeChange({
  //         color: 'white',
  //         backgroundColor: 'black',
  //     })
  //     setmodeStatus("Light Mode");
  //   }
  // else{
  //   setmodeChange({
  //     color: 'black',
  //     backgroundColor: '#f8f9fa'
  // })
  // setmodeStatus("Dark Mode");

  // }
  // }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg  ${props.modeStatus === 'light' ? 'bg-body-tertiary navbar-light' : 'bg-dark navbar-dark'}`}>
        <div className="container-fluid">
          <img src="./favicon.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></img>
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li> */}
            </ul>
            {/* { } <form className="d-flex" role="search"> */}
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            {/* <button className="btn btn-outline-success">dark Mode</button> */}
            {/* </form> */}
            <div className={`form-check form-switch text-${props.modeStatus === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.fnChangeMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Unable {props.modeStatus} Mode</label>
            </div>
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
