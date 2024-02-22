import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import CareersPage from "./components/Careers/CareersPage";
import ContactUs from "./components/ContactUs/ContactUs";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/AboutUs" element={<AboutUs />}></Route>
        <Route exact path="/ContactUs" element={<ContactUs />}></Route>
        <Route exact path="/Career" element={<CareersPage />}></Route>
       </Routes>
      <Footer />
    </>
  );
}

export default App;
