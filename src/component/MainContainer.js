import React from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

const MainContainer = () => {
  return (
    <>
      <div className="flex w-full justify-center items-center">
        <div className=" bg-black w-full h-full">
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
