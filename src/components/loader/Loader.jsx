import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="lds-ring justify-self-center">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
