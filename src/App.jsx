import React, { useState, useEffect, useRef } from "react";
import Navibar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Header from "./Components/Header/Header";
import ServiceAreas from "./Components/ServiceAreas/ServiceAreas";
import Contact from "./Components/Contact/Contact";
import Carousel1 from "./Components/Carousel/Carousel";
import BackToTop from "./Components/BackToTop/BackToTop";
import { Helmet } from "react-helmet";

const App = () => {
  const contactRef = useRef(null);
  const serviceRef = useRef(null);
  const areaRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("ehllo");
  };

  const scrollToService = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToArea = () => {
    areaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <>
      <div style={{ textAlign: "center", color: "rgb(85 99 90)" }}>
        <Helmet>
          <title>Central Door Services</title>
          <meta
            name="description"
            content="Welcome to central door services. Your number one solution for commercial and residential garage door installations and repairs in Austin, Texas"
          ></meta>
          <meta
            name="keywords"
            content="garage, door, garage door, repair, installation, Austin, Texas, commercial, residential"
          ></meta>
          <meta property="og:title" content="Central Door Services" />
          <meta
            property="og:description"
            content="Welcome to central door services. Your number one solution for commercial and residential garage door installations and repairs in Austin, Texas"
          />
          <meta property="og:image" content="https://imgur.com/zdXJVgy" />
          <meta
            property="og:url"
            content="https://www.centraldoorservices.com"
          />
          <meta name="twitter:title" content="Central Door Services" />
          <meta
            name="twitter:description"
            content="Welcome to central door services. Your number one solution for commercial and residential garage door installations and repairs in Austin, Texas"
          />
          <meta name="twitter:image" content="https://imgur.com/zdXJVgy" />
        </Helmet>
        <Navibar
          serviceClick={scrollToService}
          contactClick={scrollToContact}
          areaClick={scrollToArea}
        />
        <Header serviceClick={scrollToService} contactClick={scrollToContact} />

        <Services propRef={serviceRef} />

        <ServiceAreas propRef={areaRef} />
        {isSmallScreen ? (
          ""
        ) : (
          <h1 style={{ marginTop: "3%", color: "rgb(29,41,81)" }}>
            Contact Us
          </h1>
        )}
      </div>
      <div
        style={{
          backgroundColor: "rgb(29,41,81)",
          height: "550px",
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
