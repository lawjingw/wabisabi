import React from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-white font-bold text-xl">
            Wabisabi
          </Link>
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/product" className="text-gray-300 hover:text-white">
            Shop
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
        <SearchBar />
      </nav>
    </header>
  );
};

export default Header;
