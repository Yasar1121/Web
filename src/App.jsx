import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row flex-1">
        <Sidebar />
        <div className="flex-1 p-4 overflow-y-auto bg-slate-200">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
