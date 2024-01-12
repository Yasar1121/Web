import React from "react";
import { FaUser, FaPaperPlane } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const Victoria = () => {
  return (
    <div className="bg-white rounded-lg shadow-md w-[350px] h-[370px] relative overflow-hidden">
      <div className="flex bg-blue-500 text-white p-2 justify-between items-center">
        <span className="flex">
          <FaUser className="mr-2 ml-3 text-lg" />
          <h3 className="text-xs font-semibold">Victoria</h3>
        </span>
        <span>
          <IoIosClose className="mr-4" />
        </span>
      </div>

      <div className="px-4 py-2 h-[260px] overflow-y-auto">
        <div className="flex items-end mb-2">
          <div className="bg-blue-500 text-white p-3 rounded-md max-w-[80%]">
            Hello! How can I assist you today?
          </div>
        </div>

        <div className="flex justify-end mb-2">
          <div className="bg-gray-200 p-3 rounded-md max-w-[80%]">
            Hi Victoria! I need help with my account settings.
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full border rounded-full px-4 py-2 focus:outline-none"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaPaperPlane />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Victoria;
