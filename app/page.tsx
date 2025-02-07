import React, { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
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

const HomePage = async ({ searchParams }: HomePageProps) => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl mb-2">Welcome to My E-commerce App</h2>
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <SearchBar />
        <Filter />
        <Suspense fallback={<Spinner />}>
          <ProductList searchParams={searchParams} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
