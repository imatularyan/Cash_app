import React from "react";
import Vector from "../assets/img/Vector_cover.svg";
import Phone from "../assets/img/intro-phone.png";
import Cube from "../assets/img/intro-cube 1.png";
import Cubes from "../assets/img/intro-cubes 1.png";
import Pillar from "../assets/img/intro-pillar 1.png";
import Stairs from "../assets/img/intro-stairs 1.png";

const Body = () => {
  return (
    <>
      <div className="w-full h-full inline-flex pr-[50px] pb-[379px] items-center relative">
        <div className="w-full h-screen">
          <img
            src={Vector}
            alt="vector"
            className="w-full h-full flex-shrink-0 object-cover"
          />
        </div>
        <div className=" w-[711px] h-[302.875px] flex flex-col justify-center items-center flex-shrink-0 absolute left-[30%]">
          <h1 className="flex w-full h-full  text-white text-[220px] font-black tracking-wide uppercase leading-[166px]">
            Cash
          </h1>
          <div className="w-[370px] h-[453.083px] absolute ">
            <img
              src={Phone}
              alt="phone"
              className="w-full h-full flex-shrink-0"
            />
          </div>
          <h1 className="flex w-full h-full text-white text-[220px] font-black tracking-wide uppercase leading-[166px] pl-24 z-10">
            App
          </h1>
        </div>
        <div className="w-[74px] h-[73.212px] absolute left-60 top-32 ">
          <img className=" w-full h-full flex-shrink-0" alt="cube" src={Cube} />
        </div>
        <div className="w-[188px] h-[176.478px] absolute left-60 top-1/2 ">
          <img
            className=" w-full h-full flex-shrink-0"
            alt="cubes"
            src={Cubes}
          />
        </div>
        <div className="w-[280px] h-[329.878px] absolute right-80 top-1/2">
          <img
            className=" w-full h-full object-contain bg-no-repeat shadow flex-shrink-0"
            alt="pillar"
            src={Pillar}
          />
        </div>
        <div className="w-[200px] h-[260.904px] absolute right-80 top-32">
          <img
            className=" w-full h-full object-contain bg-no-repeat shadow  flex-shrink-0"
            alt="Stairs"
            src={Stairs}
          />
        </div>
      </div>
    </>
  );
};

export default Body;
