import React, { useState } from "react";
import myimage from "../assets/images/projectpage/i1.png";
import StarsCanvas from "../components/projectp/StarsCanvas";
import Gradient from "../components/projectp/Gradient";
import Gradientwhite from "../components/projectp/Gradientwhite";
import Pcard from "./projectp/Pcard";
import Pcard2 from "./projectp/Pcard2";
import Pcard3 from "./projectp/Pcard3";
import Pcard4 from "./projectp/Pcard4";

const Project = () => {
  const [cardindex,setind]=useState(0);
  const cards=[<Pcard/>,<Pcard2/>,<Pcard3/>,<Pcard4/>];

  function handlenext(){
    if(cardindex<cards.length -1){
    setind(cardindex+1);}
  };

  function handleprev(){
    if(cardindex>0){
    setind(cardindex-1);}
  };


  return (
   <div className="flex flex-col">

    <div className="flex w-full p-10 gap-5">
      <div className="w-1/3 flex justify-center items-center text-7xl flex-col gap-2   " >
      <span>OUR</span>
      <span> PROJECTS</span>
      </div>
      <div className="w-2/3 flex flex-col gap-5 ">
      <div >
      {cards[cardindex]};
      </div>
      <div className="flex items-center justify-center gap-8" >
      <button onClick={handleprev} disabled={cardindex === 0}
              className={`border rounded-md px-4 py-2 w-1/6 bg-gradient-to-t from-[#0f1840] to-[#43b1ae] 
              ${cardindex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}>Previous</button>
      <button onClick={handlenext} disabled={cardindex === cards.length - 1}
              className={`border rounded-md px-4 py-2 w-1/6 bg-gradient-to-t from-[#0f1840] to-[#43b1ae] 
              ${cardindex === cards.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}>next</button>
    </div>
</div>
    </div>

 
   </div>
  );
};

export default Project;
