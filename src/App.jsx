import React, { useState, useEffect, useRef } from "react";
import Navibar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Header from "./Components/Header/Header";
import ServiceAreas from "./Components/ServiceAreas/ServiceAreas";
import Contact from "./Components/Contact/Contact";
import Carousel1 from "./Components/Carousel/Carousel";
import BackToTop from "./Components/BackToTop/BackToTop";

const App = () => {
  const [showServices, setShowServices] = useState(true);
  const [showQuote, setShowQuote] = useState(true);
  const contactRef = useRef(null);
  const serviceRef = useRef(null);
  const areaRef = useRef(null)

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("ehllo");
  };

  const scrollToService = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToArea = () => {
    areaRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const isSmallScreen = window.innerWidth <= 768;

  useEffect(() => {
    if (isSmallScreen) {
      setShowQuote(false);
    }
  }, []);

  return (
    <>
      <div style={{ textAlign: "center", color: "rgb(85 99 90)" }}>
        <Navibar
          serviceClick={scrollToService}
          contactClick={scrollToContact}
          areaClick={scrollToArea}
        />
        <Header serviceClick={scrollToService} contactClick={scrollToContact} />
        {isSmallScreen ? <Carousel1 /> : <Services propRef={serviceRef} />}
        <ServiceAreas propRef={areaRef}/>
        <h1 style={{ marginTop: "3%" }}>Want to know more?</h1>
      </div>
      <div
        style={{
          backgroundColor: "rgb(85 99 90)",
          height: "400px",
          width: "100%",
          margin: "auto",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Contact propRef={contactRef} />
      </div>
      <BackToTop />
    </>
  );
};

export default App;
