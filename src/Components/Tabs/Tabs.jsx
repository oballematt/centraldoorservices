import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const NavTabs = () => {
  return (
    <Tabs
      defaultActiveKey="services"
      id="uncontrolled-tab-example"
      className="mb-3"
      style={{justifyContent: "center"}}
    >
      <Tab eventKey="services" title="Services">
      </Tab>
      <Tab eventKey="quote" title="Get A Qutoe">
      </Tab>
    </Tabs>
  );
};

export default NavTabs;
