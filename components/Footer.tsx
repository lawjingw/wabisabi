import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-serif text-gray-900">WabiSabi</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Embracing the beauty of simplicity in Japanese-inspired homeware.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-900">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/new-arrivals"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/bestsellers"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-900">About</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/our-story"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Shipping
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-900">Newsletter</h4>
            <p className="text-sm text-gray-600">
              Subscribe to receive updates and exclusive offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm border border-gray-200 
                  focus:outline-none focus:border-gray-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gray-900 text-white text-sm 
                  hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} WabiSabi. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
