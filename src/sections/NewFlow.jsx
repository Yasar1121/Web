import React from "react";

const NewFlow = () => {
  return (
    <div className="flex justify-start items-center h-full p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-[50%]">
        <h2 className="text-3xl font-bold mb-6">New Flow</h2>
        <form>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="flowName"
            >
              Flow Name:
            </label>
            <input
              className="border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="flowName"
              type="text"
              placeholder="Enter flow name"
            />
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Flow
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewFlow;
