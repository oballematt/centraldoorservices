import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Breadcrumbs = (props) => {
  return (
    <Breadcrumb style={{marginTop:"20px"}}>
      {props.breadcrumbItems.map((item, index) => (
        <Breadcrumb.Item active={item.active} key={index} href={item.href}>
          {item.text}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
