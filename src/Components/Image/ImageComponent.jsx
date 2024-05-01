import React from "react";
import { Img } from "react-image";

const ImageComponent = (props) => {
  const MyLoader = () => <div>Loading...</div>;

  const MyErrorComponent = () => <div>Error loading image.</div>;

  return (
    <div>
      <Img
        src="/images/shutterstock_2267418927.webp"
        loader={<MyLoader />}
        unloader={<MyErrorComponent />}
        style={props.styles}
        imgStyle={props.styles}
      />
    </div>
  );
};

export default ImageComponent;

