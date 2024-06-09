import React from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent  fixed top-0">
      <div className="container">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex flex-shrink-0">
                <a href="/" className="text-white font-medium text-2xl flex">
                  <Image src="/statis/logo_simponia.webp" width={40} height={20} className="mr-4" alt="Picture of the author" />
                  <span className="self-center">Simponia</span>
                </a>
              </div>
            </div>

            <div className="ml-4 flex items-center space-x-4">
              <button className="bg-white bg-opacity-15 rounded-full w-28 h-10 text-white text-sm hover:bg-opacity-100 hover:text-primary ease-in-out duration-300">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
