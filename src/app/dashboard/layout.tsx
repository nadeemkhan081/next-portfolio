import { ChakraProvider, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { PiBagSimpleBold } from "react-icons/pi";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <ChakraProvider>
      <div>
        <nav className="bg-black text-white px-5 py-4 flex justify-between  items-center  h-20">
          <div className="flex items-center justify-between gap-4">
            <PiBagSimpleBold size={28} />
            <Heading fontSize='x-large' fontFamily='sans-serif'>NADEEM KHAN</Heading>
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
    </ChakraProvider>
  );
};

export default DashboardLayout;
