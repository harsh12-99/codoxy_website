import Navbar from "@/pages/Navbar";
import React from "react";
// import { Typography ,Button} from "@mui/material";
// import Navbar from "../.next/components/Navbar";

const Home = () => {
  return (
    <div className="">
      {/* <Navbar/> */}
      <div className=" flex flex-row mt-44 justify-around items-center  ">
        <div className="  flex flex-col items-start gap-y-12 w-1/2"> 
        <div className="flex flex-col items-start gap-y-5">
         <h1 className="text-4xl font-bold text-blue-900 ">Welcome to Codoxy Solutions</h1>
         <p className="text-3xl font-bold text-blue-900 ">Empower your business with innovative digital experiences</p>
          <p className="text-xl font-semibold text-black-800 ">Codoxy helps you to leverage the power of digital technology to revolutionize your business offerings. Stand out in today’s competitive business landscape with powerful digital solutions.</p>
          </div>

          <div className="mt-5">
          <button className="border-2 bg-blue-500 rounded-full px-8 py-4 text-white font-semibold hover:bg-white hover:text-blue-500">Talk To Us</button>
          </div>

          <div className="flex flex-col gap-y-3">
            <div>
            <p className="text-xl font-semibold">EXPERIENCE THE TECHNOLOGY</p>
          </div>
          <div className="flex flex-row items-center justify-between ">
          <img src="/images/react.png" className=" w-12 h-10" alt="" />
          <img src="/images/next.png" className=" w-14 h-10" alt="" />
          <img src="/images/vue.png" className=" w-14 h-10" alt="" />
          </div>
          </div>
        </div>


        <div className="hover:scale-125 transition-all duration-700 cursor-pointer ">
        <img src="/images/banner.jpg" className=" " alt="" />
        </div>

      </div>
    </div>
  );
};

export default Home;
