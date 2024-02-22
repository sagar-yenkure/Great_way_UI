import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/AboutUs" element={<AboutUs />}></Route>
        <Route exact path="/ContactUs" element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
