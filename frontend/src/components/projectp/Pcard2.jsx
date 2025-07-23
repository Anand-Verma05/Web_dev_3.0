import React from "react";
import image1 from "../../assets/images/projectpage/i1.png";
import { Github } from "lucide-react";
import Gradientwhite from "./Gradientwhite";

const Pcard2 = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 ">
      <div className="bg-gradient-to-t from-[#0f1840] to-[#43b1ae] flex flex-col border border-white font-mono rounded-3xl ">
        <div className="p-5 text-4xl flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          Rubiks cube solver second
          <button className="text-green-900 text-sm border border-yellow-400 rounded-md p-1 bg-green-500">
            Completed
          </button>
        </div>

        {/* <div className="pl-5">status</div> */}
        <div className="flex flex-col md:flex-row p-5 ">
          <div className="w-full md:w-1/2 flex flex-col gap-10 justify-center">
            <div>
              solves cube autonoumously usingg cv and ml algos Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Aut rerum repudiandae
              quasi dignissimos soluta, possimus ea eaque sed quo dolorem
              tenetur, natus voluptatibus dolores molestias aspernatur, officiis
              perspiciatis repellendus ad?
            </div>
            <div className="text-2xl">Techstack:</div>
            <div className="grid grid-rows-2 grid-cols-3 gap-2">
              <button>YOLO</button>
              <button>Open CV</button>
              <button>ml algo</button>
              <button>YOLO</button>
              <button>Open CV</button>
              <button>ml algo</button>
            </div>

            <div className="flex items-center  border w-2/5 justify-center border-blue-700 rounded-md h-1/6">
              <a href="" target="_blank" className="flex gap-2">
                <Github />
                <button className=" ">Learn More</button>
              </a>
            </div>
          </div>
          {/* image part */}
          <div className="w-full md:w-1/2 h-3/4 flex justify-center items-center relative ">
            <Gradientwhite />
            <img src={image1} alt="" className="z-10 p-5 ml-12 "  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pcard2;
