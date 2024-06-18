import React, { useState, useEffect, useRef } from "react";
import Navibar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Header from "./Components/Header/Header";
import ServiceAreas from "./Components/ServiceAreas/ServiceAreas";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import BackToTop from "./Components/BackToTop/BackToTop";
import Footer from "./Components/Footer/Footer";
import { Helmet } from "react-helmet";

const App = () => {
  const contactRef = useRef(null);
  const serviceRef = useRef(null);
  const areaRef = useRef(null);
  const aboutUsRef = useRef(null)

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

  const scrollToAbout = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <>
      <div style={{ textAlign: "center", color: "rgb(85 99 90)" }}>
        <Helmet>
          <title>
            Central Door Services
          </title>
          <meta
            name="description"
            content="Central Door Services offers top-notch commercial and residential garage door installations and repairs in Austin, Texas. Contact us today for reliable and professional service."
          />
          <meta
            name="keywords"
            content="garage door repair, commercial, commercial installation, garage door installation, Austin, TX, commercial garage doors, residential garage doors, Central Door Services"
          />
          <meta
            property="og:title"
            content="Central Door Services | Commercial Door Installations & Repairs in Austin, TX"
          />
          <meta
            property="og:description"
            content="Central Door Services is your trusted provider for commercial and residential garage door installations and repairs in Austin, Texas."
          />
          <meta property="og:image" content="https://imgur.com/zdXJVgy" />
          <meta
            property="og:url"
            content="https://www.centraldoorservices.com"
          />
          <meta property="og:type" content="website" />
          <meta
            name="twitter:title"
            content="Central Door Services | Commercial Door Installations & Repairs in Austin, TX"
          />
          <meta
            name="twitter:description"
            content="Central Door Services offers reliable commercial door installations and repairs for both commercial and residential clients in Austin, Texas."
          />
          <meta name="twitter:image" content="https://imgur.com/zdXJVgy" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://www.centraldoorservices.com" />
        </Helmet>
        <Navibar
          serviceClick={scrollToService}
          contactClick={scrollToContact}
          areaClick={scrollToArea}
          aboutUs={scrollToAbout}
        />
        <Header serviceClick={scrollToService} contactClick={scrollToContact} />

        <Services propRef={serviceRef} />

        <ServiceAreas propRef={areaRef} />
      </div>
      <h1
        style={{ textAlign: "center", marginTop: "3%", color: "rgb(29,41,81)" }}
      >
        About Us
      </h1>
      <div
        style={{
          backgroundColor: "rgb(29,41,81)",
          margin: "auto",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <AboutUs propRef={aboutUsRef}/>
      </div>

      <h1
        style={{
          textAlign: "center",
          marginTop: "3%",
          color: "rgb(29,41,81)",
        }}
      >
        Contact Us
      </h1>

      <div
        style={{
          backgroundColor: "rgb(29,41,81)",
          height: "500px",
          width: "100%",
          margin: "auto",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Contact propRef={contactRef} />
      </div>
      {isSmallScreen ? "" : <BackToTop />}
      <Footer />
    </>
  );
};

export default App;
