import React from "react";
import NavBar from "./navbar";

function Aboutus() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center space-x-6 m-6">
        <div
          class="flex justify-center items-center p-6 w-[40rem] h-[20rem] m-5 bg-white rounded-lg border border-gray-200 shadow-md 
                dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="items-center  mb-2">
            <h1 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              About Us
            </h1>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Cal Management is all about prioritizing your time and managing
              your life through the use of Calendar by organizing meetings,
              events and tasks to achieve your set objectives
            </p>
          </div>
        </div>
        <div
          class=" p-6 w-[50rem] h-[20rem] m-5 bg-white rounded-lg border border-gray-200 shadow-md 
                dark:bg-gray-800 dark:border-gray-700 lg:mb-0 mb-6"
        >
          <img
            className="w-full h-auto rounded-lg"
            src="https://www.conference-board.org/images/products/conferences/Conferences-1200x627.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
