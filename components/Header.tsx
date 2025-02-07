"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  return (
    <header className="bg-white border-b border-gray-200">
      {isSearchOpen && (
        <div>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSearchOpen(false)}
          />
          <div className="fixed top-0 left-0 right-0 bg-white z-50 py-4 shadow-lg">
            <div className="container mx-auto px-4">
              <SearchBar onClose={() => setIsSearchOpen(false)} />
            </div>
          </div>
        </div>
      )}

      <Navigation onSearchClick={handleSearchClick} />
    </header>
  );
}

export default Header;
