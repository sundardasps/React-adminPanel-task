import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Button } from "@material-tailwind/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Details from "./components/Details";

function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <div className="flex gap-4 mx-5 h-screen">
        <div className="hidden md:block h-[37.5rem]">
          <Sidebar />
        </div>
        <Details />
      </div>
    </div>
  );
}

export default App;
