/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import React, { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type SearchBarProps = {
  onClose: () => void;
};

function SearchBar({ onClose }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search our collection..."
        value={searchQuery}
        onChange={handleChange}
        className="w-full px-4 py-3 pr-12 border-none text-gray-700 text-lg
          placeholder:text-gray-400 focus:outline-none focus:ring-0"
      />
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-1/2 -translate-y-1/2
          text-gray-400 hover:text-gray-600"
      >
        <span className="sr-only">Close search</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;
