"use client";

import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="max-w-md w-full text-center space-y-6 p-6">
        <h2 className="text-2xl font-serif text-gray-900">
          Something went wrong
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          We apologize for the inconvenience. Please try again or return to the
          homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={reset}
            className="px-6 py-2 bg-gray-900 text-white text-sm 
              hover:bg-gray-800 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-2 border border-gray-200 text-gray-700 text-sm 
              hover:border-gray-400 transition-colors"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
