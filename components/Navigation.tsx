"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, SearchIcon, ShoppingBagIcon, X } from "lucide-react";
import { useState } from "react";

type NavigationProps = {
  onSearchClick: () => void;
};

function Navigation({ onSearchClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:block md:order-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 px-4"
                >
                  HOME
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/collections"
                  className="text-gray-600 hover:text-gray-900 px-4"
                >
                  COLLECTION
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 px-4"
                >
                  ABOUT
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 right-0 bg-white border-b border-gray-200 z-10 md:hidden">
            <button
              className="mt-5 ml-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X />
            </button>
            <div className="py-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                HOME
              </Link>
              <Link
                href="/collections"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                COLLECTIONS
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                ABOUT
              </Link>
            </div>
          </div>
        )}

        <Link href="/" className="text-2xl font-serif text-gray-800 md:order-1">
          WabiSabi
        </Link>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:order-3">
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={onSearchClick}
          >
            <span className="sr-only">Search</span>
            <SearchIcon className="w-6 h-6" />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <span className="sr-only">Cart</span>
            <ShoppingBagIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
