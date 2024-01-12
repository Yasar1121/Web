import React from "react";
import { FaTwitter } from "react-icons/fa";

const Danny = () => {
  return (
    <div className="bg-white rounded-lg shadow-md w-[360px] h-[400px] p-4">
      <div className="flex items-center mb-4">
        <FaTwitter className="text-blue-400 text-3xl mr-2" />
        <h3 className="text-xl font-bold">Danny's Tweets</h3>
      </div>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <img
            src="https://placekitten.com/40/40"
            alt="User Avatar"
            className="rounded-full mr-2"
          />
          <div>
            <h4 className="text-gray-800 font-semibold">Danny</h4>
            <p className="text-gray-500">@danny_twitter • 2h</p>
          </div>
        </div>
        <p className="text-gray-800">
          Excited to share my thoughts on the latest tech trends! 🚀
        </p>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <img
            src="https://placekitten.com/40/40"
            alt="User Avatar"
            className="rounded-full mr-2"
          />
          <div>
            <h4 className="text-gray-800 font-semibold">Danny</h4>
            <p className="text-gray-500">@danny_twitter • 1d</p>
          </div>
        </div>
        <p className="text-gray-800">
          Just finished a great coding session! 💻 #CodingLife
        </p>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <img
            src="https://placekitten.com/40/40"
            alt="User Avatar"
            className="rounded-full mr-2"
          />
          <div>
            <h4 className="text-gray-800 font-semibold">Danny</h4>
            <p className="text-gray-500">@danny_twitter • 3d</p>
          </div>
        </div>
        <p className="text-gray-800">Just enjoying a cup of coffee ☕</p>
      </div>
    </div>
  );
};

export default Danny;
