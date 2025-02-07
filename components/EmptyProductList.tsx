function EmptyProductList() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      <h2 className="text-2xl font-semibold mb-4">No products found</h2>
      <p className="text-gray-600">
        Try adjusting your filters or check back later for new products.
      </p>
    </div>
  );
}

export default EmptyProductList;
