# Japanese-Style Homeware E-commerce Website Documentation

This document provides a detailed explanation of the website flow and features for the Japanese-style homeware e-commerce site. It is intended to serve as a guide for app developers and designers to implement the website with clarity and precision.

---

## Table of Contents

1. [Overview](#overview)
2. [User Flow](#user-flow)
3. [Site Structure & Pages](#site-structure--pages)
   - [Navigation Header](#navigation-header)
   - [Home/Product Listing Page](#homeproduct-listing-page)
   - [Product Details Page](#product-details-page)
4. [Features](#features)
   - [Filtering & Searching](#filtering--searching)
5. [Additional Considerations](#additional-considerations)

---

## Overview

The website is an e-commerce platform specializing in Japanese-style homeware. It is designed to offer a smooth browsing experience where users can easily view, filter, search, and obtain detailed information about products.

**Key Objectives:**

- **User-Friendly Navigation:** Quick access to product categories and site sections via a persistent header.
- **Efficient Browsing:** Easy-to-navigate product listing with filtering and search functionalities.
- **Detailed Product Information:** Clear, comprehensive product pages showcasing images and relevant product details.

## Tech Stack

- Frontend: Next.js(version 15) with Typescript, Tailwind CSS for styling
- Backend/Database: Supabase

---

## Website Flow

1. **Landing on the Homepage:**
   - Users access the website and are immediately presented with a **Navigation Header** and a **Product Listing** area.
2. **Browsing Products:**

   - Users scroll through the list of available products which fetched from Supabase Rest API.
   - The product listing page includes options to **filter** by various criteria (e.g., category, price, style) and a **search bar** to query products by name or keyword.

3. **Filtering & Searching:**

   - Users can refine the list using filter options.
   - The search functionality dynamically updates the product list based on user input.

4. **Viewing Product Details:**

   - Upon clicking a product, users are redirected to a **Product Details Page**.
   - This page displays high-quality photos and all pertinent details about the selected item.

5. **Additional Navigation:**
   - The persistent header allows users to navigate to other sections of the website (e.g., About, Contact, Cart, etc.), ensuring a seamless browsing experience.

---

## Site Structure & Pages

### Navigation Header

- **Purpose:** Provides consistent access to key sections of the site.
- **Elements:**
  - **Logo/Brand Name:** Positioned on the left; clickable and redirects to the homepage.
  - **Navigation Links:** Links to important pages such as Home, Shop, About, and Contact.
  - **Search Bar:** Allows users to perform a site-wide search.
  - **User Account/Cart Icons:** Quick links for user account management and accessing the shopping cart.

### Home/Product Listing Page

- **Layout:**
  - **Header:** Contains the navigation header.
  - **Main Section:**
    - **Product Grid/List:** Displays products with thumbnail images, product names, and brief details (e.g., price).
    - **Filter Sidebar/Bar (Optional):** May appear on the side or top for filtering options.
  - **Footer:** Contains additional links (e.g., privacy policy, terms of service) and contact information.
- **Functionality:**
  - **Dynamic Loading:** Optionally implement infinite scrolling or pagination.
  - **Responsiveness:** The layout should adjust for mobile, tablet, and desktop views.

### Product Details Page

- **Layout:**

  - **Header:** Maintains the navigation header.
  - **Main Section:**
    - **Product Images:** A gallery or carousel showing multiple high-quality images of the product.
    - **Product Information:**
      - **Title/Name:** Clearly visible.
      - **Description:** Detailed information about the product including materials, dimensions, care instructions, etc.
      - **Price:** Prominently displayed.
      - **Additional Details:** Such as color options, stock status, and possibly customer reviews.
    - **Call to Action:** "Add to Cart" or "Buy Now" buttons.
  - **Footer:** Similar to the homepage footer.

- **Functionality:**
  - **Interactive Image Gallery:** Allow users to click on thumbnails to view enlarged images.
  - **Responsive Layout:** Ensure all details and images are accessible on various devices.
  - **Optional:** Social sharing buttons and related product recommendations.

---

## Features

### Filtering & Searching

- **Filtering Options:**
  - **Categories:** Users can filter products based on predefined categories (e.g., tableware, decor, textiles).
  - **Price Range:** Allow filtering products within specific price ranges.
  - **Styles/Collections:** Filter based on design styles, collections, or themes.
- **Search Functionality:**

  - **Search Bar:** Located in the navigation header and/or within the product listing page.
  - **Autocomplete Suggestions:** Optionally implement autocomplete to help users find products quickly.
  - **Real-time Results:** As the user types, update the product list to reflect matching items.

- **UX Considerations:**
  - **Clear Filters:** Ability to easily reset or clear applied filters.
  - **Feedback:** Display messages when no products match the search/filter criteria.

---

## Additional Considerations

- **Responsive Design:** Ensure that all pages are optimized for both desktop and mobile devices.
- **Performance:** Optimize images and scripts to reduce load times, ensuring a smooth user experience.
- **Accessibility:** Follow accessibility best practices (e.g., ARIA labels, keyboard navigation support) to accommodate all users.
- **SEO Best Practices:** Structure HTML and metadata to ensure high search engine rankings.
- **Scalability:** The design should be modular to easily accommodate additional features like user reviews, wishlists, or promotional banners in the future.

---

### Database Schema

A suggested SQL schema is outlined below:

```sql
-- Users Table: Stores user account data
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories Table: Defines product categories
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT
);

-- Products Table: Stores product details
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    colors TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category_id INT REFERENCES categories(id),
    image_urls TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders Table: Captures user orders
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'pending'
);

-- Order Items Table: Details the products in each order
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id),
    product_id INT REFERENCES products(id),
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL
);

-- Reviews Table: Allows users to rate and comment on products
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id),
    user_id INT REFERENCES users(id),
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Folder Structure

wabisabi/
├── components/ # UI components (Header, Footer, ProductCard, etc.)
│ ├── Header.tsx
│ ├── Footer.tsx
│ ├── ProductCard.tsx
│ └── ...
├── app/ # Next.js pages
│ ├── index.tsx # Home / Product Listing page
│ ├── product/
│ │ └── [id].tsx # Product Details page
│ ├── about.tsx
│ └── ...
├── styles/ # Global styles and Tailwind CSS configuration
│ ├── globals.css
│ └── tailwind.config.js
├── public/ # Static assets (images, fonts, etc.)
├── lib/ # Utility functions and Supabase client configuration
│ └── supabaseClient.ts
├── utils/ # Helper functions
├── prisma/ # Database schema and migration files (if using Prisma)
│ ├── schema.prisma
│ └── migrations/
└── docs/ # Documentation files (including this CONTEXT.md)
└── CONTEXT.md
