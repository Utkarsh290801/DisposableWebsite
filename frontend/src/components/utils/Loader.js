import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <ThreeCircles
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor="blue"
  innerCircleColor="black"
  middleCircleColor="lightBlue"
/>
    </div>
  );
};

export default Loader;