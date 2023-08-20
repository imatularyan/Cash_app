import React from "react";
import Header from "./Header";
import Body from "./Body";

const MainContainer = () => {
  return (
    <>
      <div className="flex w-full justify-center items-center">
        <div className=" bg-black w-full h-full">
          <Header />
          <Body />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
