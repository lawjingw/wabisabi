import { Product } from "./types";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function getProducts() {
  if (!SUPABASE_URL || !SUPABASE_API_KEY) {
    console.error("Supabase URL or API key is not defined.");
    return null;
  }

  // Construct the REST endpoint for products.
  // Format: https://<PROJECT_REF>.supabase.co/rest/v1/products?select=*
  const endpoint = `${SUPABASE_URL}/rest/v1/products?select=*`;

  const response = await fetch(endpoint, {
    headers: {
      apikey: SUPABASE_API_KEY,
      Authorization: `Bearer ${SUPABASE_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error("Error fetching products:", response.statusText);
    return null;
  }

  const data = await response.json();
  return data as Product[];
}

// export async function getProductById(id: number)
export async function getProductById(id: number) {
  if (!SUPABASE_URL || !SUPABASE_API_KEY) {
    console.error("Supabase URL or API key is not defined.");
    return null;
  }

  // Construct the REST endpoint for a single product.
  // Format: https://<PROJECT_REF>.supabase.co/rest/v1/products?id=eq.<ID>
  const endpoint = `${SUPABASE_URL}/rest/v1/products?id=eq.${id}`;

  const response = await fetch(endpoint, {
    headers: {
      apikey: SUPABASE_API_KEY,
      Authorization: `Bearer ${SUPABASE_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error("Error fetching product:", response.statusText);
    return null;
  }

  const data = await response.json();
  return data[0] as Product;
}
