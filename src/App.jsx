import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const CareersPage = lazy(() => import("./components/Careers/CareersPage"));
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./components/Home/Home"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Indrustry = lazy(() => import("./components/Indrustry/Indrustry"));
const ServiceComponent = lazy(() =>
  import("./components/Services/ServiceComponent")
);

import {
  CloudServices,
  DevOpsServices,
  SoftDevServices,
  WebDevServices,
} from "./components/Services/ServiceData/SoftDevServices";
import { Loading } from "./components/Loading";

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading/>}>

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/AboutUs" element={<AboutUs />}></Route>
        <Route exact path="/ContactUs" element={<ContactUs />}></Route>
        <Route exact path="/Career" element={<CareersPage />}></Route>

        <Route exact path="/Indrustry" element={<Indrustry />}></Route>
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
          </Suspense>
      <Footer />
    </>
  );
}

export default App;
