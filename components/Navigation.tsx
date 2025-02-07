import Link from "next/link";

type NavigationProps = {
  onSearchClick: () => void;
};

function Navigation({ onSearchClick }: NavigationProps) {
  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif text-gray-800">
          WabiSabi
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            HOME
          </Link>
          <Link
            href="/collections"
            className="text-gray-600 hover:text-gray-900"
          >
            COLLECTIONS
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            ABOUT
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={onSearchClick}
          >
            <span className="sr-only">Search</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <span className="sr-only">Cart</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
