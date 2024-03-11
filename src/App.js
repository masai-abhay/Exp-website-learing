import ServiceUs from "./Components/ServiceUs";
import WhyUs from "./Components/WhyUs";
import Home from "./Pages/Home";
import "./Styles/Common.css";
import Feedback from "./Components/Feedback"
import { Context } from "react";
import Contact from "./Components/ContactUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App" style={{background:"#F9F9FF",height:"100vh"}}>
    <Home/>
   <ServiceUs/>
<WhyUs/>
<Feedback/>
<Contact/>
<Footer/>
    </div>
  );
}

export default App;
