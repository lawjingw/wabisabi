import React, { Suspense } from "react";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Spinner from "@/components/Spinner";

type TsearchParams = {
  q: string | null;
  colors: string | null;
  maxPrice: string | null;
};

type HomePageProps = {
  searchParams: Promise<TsearchParams>;
};

async function HomePage({ searchParams }: HomePageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-3 sm:mb-4">
          Wabi-Sabi Living
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
          Discover our curated collection of Japanese-inspired homeware, where
          beauty meets simplicity in everyday objects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        <aside className="lg:col-span-1 order-1">
          <Filter />
        </aside>

        <div className="lg:col-span-3 order-2">
          <Suspense
            fallback={
              <div className="min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
                <Spinner />
              </div>
            }
          >
            <ProductList searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
