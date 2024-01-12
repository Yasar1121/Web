import React from "react";
import { MdMail } from "react-icons/md";
import { IoMic } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";

const PostGradPlan = () => {
  return (
    <div className="bg-white rounded-lg shadow-md w-[350px] h-[360px]">
      <div className="flex bg-slate-100 rounded-t-lg p-2 justify-between items-center">
        <span className="flex">
          <h3 className="flex text-xs font-semibold text-gray-800 items-center">
            <MdMail className="mr-2 ml-3 text-sm" />
            Post Grad plan
          </h3>
          <h3 className="text-[12px] text-gray-500 ml-1">. From Evelyn Ma</h3>
        </span>
        <span className="text-gray-500">
          <IoMic className="mr-4" />
        </span>
      </div>

      <div className="px-6">
        <div className="flex justify-between items-end">
          <h4 className="font-semibold text-normal mt-4">Evelyn Ma</h4>
          <span className="text-xs text-gray-400">1 hour ago</span>
        </div>
        <h2 className="text-2xl font-bold mb-4">Important Update</h2>
        <p className="text-gray-800 text-[12.5px] mt-3 font-semibold">
          Hello student,
          <br />
          We want to inform you about some important updates regarding your
          post-graduation plans. Please review the attached document for more
          details.
          <br />
          <br />
          Best regards,
          <br />
          Evelyn Ma
        </p>
        <hr className="mt-4" />
        <div className="flex gap-2">
          <button className="bg-slate-200 text-gray-800 py-1 px-2 rounded-md text-[10px] hover:bg-slate-300 focus:outline-none focus:shadow-outline mt-2">
            View Document
          </button>
          <button className="bg-slate-200 text-gray-800 py-1 px-2 rounded-md text-[10px] hover:bg-slate-300 focus:outline-none focus:shadow-outline mt-2">
            Reply
          </button>
          <button className="bg-slate-200 text-gray-800 py-1 px-2 rounded-md text-[10px] hover:bg-slate-300 focus:outline-none focus:shadow-outline mt-2">
            Forward
          </button>
        </div>

        <h6 className="text-[10px] text-gray-400 mt-3 flex items-center">
          <CiCircleMore className="mr-1" />
          More actions
        </h6>
      </div>
    </div>
  );
};

export default PostGradPlan;
