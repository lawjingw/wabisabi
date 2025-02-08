import { getProductById } from "@/lib/dataApi";
import ProductImage from "@/components/ProductImage";
import ProductNotFound from "@/components/ProductNotFound";

type TParams = {
  prodId: string;
};

type ProductDetailsProps = {
  params: Promise<TParams>;
};

async function ProductDetails({ params }: ProductDetailsProps) {
  const { prodId } = await params;
  const product = await getProductById(Number(prodId));

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <ProductImage product={product} />

        <div className="space-y-6 sm:space-y-8">
          <div className="border-b border-gray-200 pb-6 sm:pb-8">
            <h1 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-3 sm:mb-4">
              {product.name}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <button
            className="w-full bg-gray-900 text-white py-3 sm:py-4 px-6 sm:px-8 
            hover:bg-gray-800 transition-colors duration-200 text-sm uppercase 
            tracking-wider"
          >
            Add to Cart
          </button>

          {product.color && (
            <div className="pt-6 sm:pt-8 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
              <p className="text-sm text-gray-600 capitalize">
                {product.color}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
