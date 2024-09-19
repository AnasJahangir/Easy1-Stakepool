import React from "react";
import Footer from "./Footer";

function Distribution() {
  return (
    <div className="Distribution min-h-[100vh]">
      <div className="min-h-[100vh] flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[60px] ">Compare Rewards</h1>
        <div className="relative flex justify-center items-center h-10 w-[600px] mt-10">
          <button
            className="!absolute right-5 z-10 select-none rounded-[20px] bg-[#304FFE] py-3 px-6  text-center align-middle font-sans font-semibold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Check
          </button>
          <input
            type="email"
            className="peer h-full w-full rounded-3xl p-8 pr-20 font-sans text-sm font-normal transition-all  focus:border-t-transparent focus:outline-0 text-[#000000DE]"
            placeholder="Wallet Address"
            required
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Distribution;
