
import {
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/AboutUs' element={<AboutUs />}></Route>
          <Route exact path='/ContactUs' element={<ContactUs />}></Route>
      </Routes>
    

    </>
  )
}

export default App
