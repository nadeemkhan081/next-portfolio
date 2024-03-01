import React from "react";
import { PiBagSimpleBold } from "react-icons/pi";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <div>
      <nav className="bg-black text-white px-5 py-4 flex justify-between  items-center">
        <div className="flex items-center justify-between gap-4">
            <PiBagSimpleBold size={25} />

        <h3 className="text-xl">Nadeem Khan</h3>
        </div>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>About Me</li>
          <li>Experience</li>
          <li>Education</li>
          <li>Contact Me</li>
        </ul>
      </nav>
      <div className="p-4">{props.children}</div>
    </div>
  );
};

export default DashboardLayout;
