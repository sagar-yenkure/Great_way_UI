import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from './components/Home/Home';
import CareersPage from "./components/Careers/CareersPage";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import ServiceComponent from "./components/Services/ServiceComponent";
import {
  CloudServices,
  DevOpsServices,
  SoftDevServices,
  WebDevServices,
} from "./components/Services/ServiceData/SoftDevServices";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/AboutUs" element={<AboutUs />}></Route>
        <Route exact path="/ContactUs" element={<ContactUs />}></Route>
        <Route exact path="/Career" element={<CareersPage />}></Route>
        <Route
          exact
          path="/Service-softDev"
          element={<ServiceComponent data={SoftDevServices} />}
        ></Route>
        <Route
          exact
          path="/Service-cloud"
          element={<ServiceComponent data={CloudServices} />}
        ></Route>
        <Route
          exact
          path="/Service-devOps"
          element={<ServiceComponent data={DevOpsServices} />}
        ></Route>
         <Route
          exact
          path="/Service-webDev"
          element={<ServiceComponent data={WebDevServices} />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
