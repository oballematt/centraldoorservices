import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const NavTabs = (props) => {
  return (
    <Tabs
      defaultActiveKey="services"
      id="uncontrolled-tab-example"
      className="mb-3"
      variant="pills"
      style={{ justifyContent: "center" }}
    >
      <Tab
        style={{
          backgroundColor: "lightgray",
          color: "blue",
        }}
        eventKey="services"
        title={
          <span style={{ color: "rgb(29 41 81)", fontSize: "20px" }}>
            Services
          </span>
        }
      >{props.hello}</Tab>
      <Tab
        eventKey="quote"
        title={
          <span style={{ color: "rgb(29 41 81)", fontSize: "20px" }}>
            Get A Quote
          </span>
        }
      ></Tab>
    </Tabs>
  );
};

export default NavTabs;
