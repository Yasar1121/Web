import React, { useState, useEffect } from "react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <section className="w-full bg-slate-200 text-white flex justify-between items-center px-8 py-6 lg:px-16 top-0 z-40">
      <h1 className="text-gray-300 text-7xl font-thin">Review Inbox</h1>
      <div className="hidden lg:flex justify-end items-center gap-2">
        <ul className="flex justify-center items-center gap-3">
          <li className="text-lg text-gray-300">{formattedTime}</li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
