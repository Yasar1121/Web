import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const getHoverClass = (itemName) => {
    return selectedItem === itemName || selectedItem === null
      ? "bg-gray-100 rounded-2xl"
      : "";
  };

  return (
    <div className="w-1/4 bg-slate-200 text-gray-900 p-4">
      <ul>
        <li>
          <Link
            to="/add"
            className={`flex items-center mb-3 py-3 cursor-pointer ${getHoverClass(
              "New Flow"
            )}`}
            onClick={() => handleItemClick("New Flow")}
          >
            <IoMdAdd className="mr-2 ml-2" /> New Flow
          </Link>
        </li>
        <li>
          <Link
            to="/coffee"
            className={`flex items-center mb-3 py-3 cursor-pointer ${getHoverClass(
              "Coffee?"
            )}`}
            onClick={() => handleItemClick("Coffee?")}
          >
            <MdEmail className="mr-2 ml-2" /> Coffee?{" "}
            <h6 className="text-[12px] text-gray-500 ml-1">.Marisa Lu</h6>
          </Link>
        </li>
        <li>
          <Link
            to="/feedback"
            className={`flex items-center mb-3 py-3 cursor-pointer ${getHoverClass(
              "Feedback"
            )}`}
            onClick={() => handleItemClick("Feedback")}
          >
            <MdEmail className="mr-2 ml-2" /> Feedback
            <h6 className="text-[12px] text-gray-500 ml-1">.Lindsey Weiss</h6>
          </Link>
        </li>
        <li>
          <Link
            to="/postgrad"
            className={`flex items-center mb-3 py-3 cursor-pointer ${getHoverClass(
              "Post Grad Plans"
            )}`}
            onClick={() => handleItemClick("Post Grad Plans")}
          >
            <MdEmail className="mr-2 ml-2" /> Post Grad Plans
            <h6 className="text-[12px] text-gray-500 ml-1">.Evelyn Ma</h6>
          </Link>
        </li>
        <li>
          <Link
            to="/launchplan"
            className={`flex items-center mb-3 py-3 cursor-pointer ${getHoverClass(
              "Launch Plans"
            )}`}
            onClick={() => handleItemClick("Launch Plans")}
          >
            <MdEmail className="mr-2 ml-2" /> Launch Plans
            <h6 className="text-[12px] text-gray-500 ml-1">.Dennis Jin</h6>
          </Link>
        </li>
        <li>
          <Link
            to="/victoria"
            className={`flex items-center mb-3 py-3 cursor-pointer ${getHoverClass(
              "Victoria Wang"
            )}`}
            onClick={() => handleItemClick("Victoria Wang")}
          >
            <FaFacebookMessenger className="mr-2 ml-2 text-blue-500" />
            Victoria Wang
          </Link>
        </li>
        <li>
          <Link
            to="/advait"
            className={`flex items-center mb-3 py-3 cursor-pointer ${getHoverClass(
              "Advait Kalakkad"
            )}`}
            onClick={() => handleItemClick("Advait Kalakkad")}
          >
            <FaFacebookMessenger className="mr-2 ml-2 text-blue-500" /> Advait
            Kalakkad
          </Link>
        </li>
        <li>
          <Link
            to="/danny"
            className={`flex items-center mb-3 py-3 cursor-pointer ${getHoverClass(
              "Danny Trinh"
            )}`}
            onClick={() => handleItemClick("Danny Trinh")}
          >
            <FaTwitter className="mr-2 ml-2 text-blue-500" />
            Danny Trinh
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
