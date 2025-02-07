/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const updateSearchQuery = (query: string) => {
    const params = new URLSearchParams(searchParams.toString());
    query ? params.set("q", query) : params.delete("q");
    router.push(`/?${params.toString()}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search our collection..."
          value={searchQuery}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-none
            placeholder:text-gray-400 text-gray-700 text-sm
            focus:outline-none focus:border-gray-400 transition-colors"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full px-4
            text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
