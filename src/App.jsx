import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
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

import { Loading } from "./components/Loading";
import SecondServiceComponent from "./components/Services/SecondServiceComponent";
import { CRMServices, TestingAndQAServices } from "./components/Services/ServiceData/SecondDevServices";
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
      <Suspense fallback={<Loading />}>
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

          {/* addition of the another route for the second service section */}
          <Route
            exact
            path="/Service-testingAndQA"
            element={<SecondServiceComponent data={TestingAndQAServices} />}
          ></Route>

          {/* addition of another route for crm services */}
          <Route
            exact
            path="/Service-crm"
            element={<SecondServiceComponent data={CRMServices} />}
          ></Route>
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
