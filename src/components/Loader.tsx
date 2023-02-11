import React from "react";

const Loader = () => {
  return (
    <>
      <div className="h-96 w-full"></div>
      <div className="lds-ring absolute top-10 left-1/2 -translate-x-1/2">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Loader;
