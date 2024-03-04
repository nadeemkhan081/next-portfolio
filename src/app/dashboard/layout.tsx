import Link from "next/link";
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
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/dashboard/about">
            <li>About Me</li>
          </Link>
          <Link href="/dashboard/experience">
            <li>Experience</li>
          </Link>
          <Link href="/dashboard/education">
            <li>Education</li>
          </Link>
          <Link href="/dashboard/contact">
            <li>Contact Me</li>
          </Link>
        </ul>
      </nav>
      <div className="p-4">{props.children}</div>
    </div>
  );
};

export default DashboardLayout;
