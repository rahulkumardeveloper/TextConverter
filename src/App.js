
import './App.css';
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
function App() {
  return <>
  <div className="app">
  {/* <Navbar title="TextUtils" about="About Us"/> */}
  <Navbar title="TextUtils"/>
  <div className='container m-5'>

  <Textarea />
  </div>
  </div>  
  </>
}
export default App;
