import React, { useState } from "react";
import GetAQuote from "./GetAQuote";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ServiceOptions from "./ServiceOptions";
import { ToastContainer } from "react-bootstrap";
import Carousel1 from "../Carousel/Carousel";
import "./Service.css";

const Services = (props) => {
  const isSmallScreen = window.innerWidth <= 768;
  return (
    <div style={{ color: "rgb(29 41 81)", marginTop: "50px" }}>
      <h1 ref={props.propRef} style={{ fontSize: "50px" }}>
        Our Services
      </h1>

      <h1 style={{ fontSize: "30px", marginBottom: "50px" }}>
        As dedicated specialists in commercial door repair, we strive to bring
        you a wealth of expertise and a commitment to excellence to every
        project.
      </h1>
      <Tabs
        defaultActiveKey="services"
        id="uncontrolled-tab-example"
        className="mb-3"
        variant="pills"
        style={{ justifyContent: "center" }}
      >
        <Tab
          eventKey="services"
          title={
            <span style={{ color: "rgb(29 41 81)", fontSize: "20px" }}>
              Services
            </span>
          }
        >
          {isSmallScreen ? <Carousel1 /> : <ServiceOptions />}
        </Tab>
        <Tab
          eventKey="quote"
          title={
            <span style={{ color: "rgb(29 41 81)", fontSize: "20px" }}>
              Get A Quote
            </span>
          }
        >
          <GetAQuote />
        </Tab>
      </Tabs>
      <ToastContainer />
    </div>
  );
};

export default Services;
