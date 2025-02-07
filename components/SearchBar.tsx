"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const updateSearchQuery = (query: string) => {
    const params = new URLSearchParams(searchParams.toString());
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    query ? params.set("q", query) : params.delete("q");
    router.push(`/?${params.toString()}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchQuery(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex mb-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleChange}
        className="px-2 py-1 rounded-l-md outline-none border"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 rounded-r-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
