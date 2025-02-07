"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Product } from "../lib/types";
import SearchBar from "../components/SearchBar";
import Filter from "@/components/Filter";
import { useFilteredProducts } from "@/lib/hooks";

const sampleProducts: (Product & { color?: string })[] = [
  {
    id: 1,
    name: "Japanese Tea Set",
    price: 49.99,
    imageUrl:
      "https://cmsbcphmvkaofadmdnyy.supabase.co/storage/v1/object/public/products//product-1.jpg",
    color: "blue",
  },
  {
    id: 2,
    name: "Ceramic Bowl",
    price: 19.99,
    imageUrl:
      "https://cmsbcphmvkaofadmdnyy.supabase.co/storage/v1/object/public/products//product-2.jpg",
    color: "white",
  },
  {
    id: 3,
    name: "Zen Garden",
    price: 29.99,
    imageUrl:
      "https://cmsbcphmvkaofadmdnyy.supabase.co/storage/v1/object/public/products//product-3.jpg",
    color: "green",
  },
];

const HomePage = () => {
  const filteredProducts = useFilteredProducts(sampleProducts);

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl mb-2">Welcome to My E-commerce App</h2>
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <SearchBar />
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
