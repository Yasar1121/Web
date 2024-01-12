import React from "react";
import { IoMic } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import task from "../assets/task.jpeg";
import map from "../assets/map.jpeg";
import { MdLocationOn } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
const Coffee = () => {
  return (
    <div className="flex flex-1 overflow-x-auto p-4 items-center">
      <div className="flex flex-row gap-8 ">
        <div
          className="bg-white  rounded-lg shadow-md"
          style={{ width: "350px", height: "360px" }}
        >
          <div className="flex bg-slate-100 rounded-t-lg p-2 justify-between items-center">
            <span className="flex">
              <h3 className="flex text-xs font-semibold text-gray-800 items-center">
                <MdMail className="mr-2 ml-3 text-sm" />
                Coffee?
              </h3>
              <h3 className=" text-[12px] text-gray-500 ml-1">
                . Mail from Marisa Lu
              </h3>
            </span>

            <span className="text-gray-500">
              <IoMic className=" mr-4" />
            </span>
          </div>

          <div className=" px-6 ">
            <div className="flex justify-between items-end">
              <h4 className="font-semibold text-normal mt-4">Marisa Lu</h4>
              <span className="text-xs text-gray-400">Just Now</span>
            </div>
            <h2 className=" text-2xl font-bold mb-4">Coffee?</h2>
            <p className="text-gray-800 text-[12.5px] mt-3 font-semibold">
              Hey Jason,
              <br /> <br /> Was wondering if you'd be interested to meet my team
              at Philz coffee at 11 AM today.No pressure if you can't make
              it,although I think you guys would really get along! <br />
              <br />
              Marisa
            </p>
            <hr className=" mt-4" />
            <div className="flex gap-2">
              <button className="bg-slate-200 text-gray-800 py-1 px-2 rounded-md text-[10px] hover:bg-slate-300 focus:outline-none focus:shadow-outline mt-2">
                Reply
              </button>
              <button className="bg-slate-200 text-gray-800 py-1 px-2 rounded-md text-[10px] hover:bg-slate-300 focus:outline-none focus:shadow-outline mt-2">
                Forward
              </button>
              <button className="bg-slate-200 text-gray-800 py-1 px-2 rounded-md text-[10px] hover:bg-slate-300 focus:outline-none focus:shadow-outline mt-2">
                Delete
              </button>
            </div>

            <h6 className="text-[10px] text-gray-400 mt-3 flex items-center">
              <CiCircleMore className=" mr-1" />
              More actions
            </h6>
          </div>
        </div>

        <div
          className="bg-white rounded-lg shadow-md"
          style={{ width: "350px", height: "390px" }}
        >
          <div className="flex bg-slate-100 rounded-t-lg p-2 justify-between items-center">
            <h3 className="flex text-xs font-semibold text-gray-800 items-center px-6">
              See my availability: today
            </h3>
            <h6></h6>
            <span className="text-gray-500">
              <IoMic className="mr-4" />
            </span>
          </div>

          <div className="px-6">
            <h2 className="text-2xl font-bold mb-4 mt-2">
              Available until 1 PM
            </h2>
            <p className="text-gray-800 text-[12.5px] mt-3 font-semibold">
              Would you like to create an event for Coffee with Marisa at 11 AM?
            </p>
            <img
              src={task}
              alt="task"
              className="rounded-md h-[150px] w-full p-3 mt-4 mb-3 border-gray-700"
            />
            <hr className=" mt-6" />

            <div className="flex gap-2">
              <button className="bg-slate-200 text-gray-800 py-1 px-2 rounded-md text-[10px] hover:bg-slate-300 focus:outline-none focus:shadow-outline mt-2">
                Create Event
              </button>
              <button className="bg-slate-200 text-gray-800 py-1 px-2 rounded-md text-[10px] hover:bg-slate-300 focus:outline-none focus:shadow-outline mt-2">
                Edit Event
              </button>
              <button className="bg-slate-200 text-gray-800 py-1 px-2 rounded-md text-[10px] hover:bg-slate-300 focus:outline-none focus:shadow-outline mt-2">
                Full Calendar
              </button>
              <button className="bg-slate-200 text-gray-800 py-1 px-2 rounded-md text-[10px] hover:bg-slate-300 focus:outline-none focus:shadow-outline mt-2">
                Dismiss
              </button>
            </div>

            <h6 className="text-[10px] text-gray-400 mt-3 flex items-center">
              <CiCircleMore className="mr-1" />
              More actions
            </h6>
          </div>
        </div>

        <div
          className="bg-white rounded-lg shadow-md"
          style={{ width: "350px", height: "360px" }}
        >
          <div className="flex bg-slate-100 rounded-t-lg p-2 justify-between items-center">
            <span className="flex">
              <h3 className="flex text-xs font-semibold text-gray-800 items-center">
                <MdLocationOn className="mr-2 ml-3 text-sm" />
                Philz Coffee
              </h3>
              <h3 className=" text-[12px] text-gray-500 ml-1">. Location</h3>
            </span>

            <span className="text-gray-500">
              <IoMic className=" mr-4" />
            </span>
          </div>
          <img
            src={map}
            alt="task"
            className="rounded-md h-[130px] w-full  border-gray-700"
          />
          <div className="px-6">
            <h2 className="text-2md font-bold mb-2 mt-2">Philz Coffee</h2>
            <p className="text-gray-800 text-[12.5px] mt-1 font-semibold">
              Custom-blended java in a casual setting.
            </p>
            <p className="text-gray-500 text-[12.5px] mt-1 font-normal">
              20686 Stevens Creek Bivd <br />
              Cupertino,CA 95014
            </p>

            <hr className=" mt-4" />

            <div className="flex gap-2">
              <button className="bg-slate-200 text-gray-800 py-1 px-2 rounded-md text-[10px] hover:bg-slate-300 focus:outline-none focus:shadow-outline mt-2">
                <div className="flex items-center">
                  <FaLocationArrow className="mr-1" />
                  <span>Get directions </span>
                </div>
                <p className="text-[8px] text-gray-400 ">
                  requires your location
                </p>
              </button>

              <button className="bg-slate-200 text-gray-800 py-1 px-2 rounded-md text-[10px] hover:bg-slate-300 focus:outline-none focus:shadow-outline mt-2">
                See deatails
              </button>
              <button className="bg-slate-200 text-gray-800 py-1 px-2 rounded-md text-[10px] hover:bg-slate-300 focus:outline-none focus:shadow-outline mt-2">
                Find more cafes nearby
              </button>
            </div>

            <h6 className="text-[10px] text-gray-400 mt-3 flex items-center">
              <CiCircleMore className="mr-1" />
              More actions
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
