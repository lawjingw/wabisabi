import React, { Suspense } from "react";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Spinner from "@/components/Spinner";

type HomePageProps = {
  searchParams: {
    q: string | null;
    colors: string | null;
    maxPrice: string | null;
  };
};

async function HomePage({ searchParams }: HomePageProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif text-gray-900 mb-4">
          Wabi-Sabi Living
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our curated collection of Japanese-inspired homeware, where
          beauty meets simplicity in everyday objects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="sticky top-4">
            <Filter />
          </div>
        </aside>

        <div className="lg:col-span-3">
          <Suspense
            fallback={
              <div className="min-h-[400px] flex items-center justify-center">
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
