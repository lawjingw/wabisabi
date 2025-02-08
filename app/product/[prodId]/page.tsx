import Image from "next/image";
import { getProductById } from "@/lib/dataApi";

type ProductDetailsProps = {
  params: {
    prodId: string;
  };
};

async function ProductDetails({ params }: ProductDetailsProps) {
  const { prodId } = await params;
  const product = await getProductById(Number(prodId));

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-serif text-gray-800">Product Not Found</h2>
        <p className="mt-4 text-gray-600">
          The product you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-4">
          {product.imageUrls && product.imageUrls.length > 0 && (
            <div className="aspect-square relative overflow-hidden bg-gray-50">
              <Image
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                src={product.imageUrls[0]}
                alt={product.name}
                className="object-cover object-center"
                priority
              />
            </div>
          )}
          {product.imageUrls && product.imageUrls.length > 1 && (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4">
              {product.imageUrls.slice(1).map((url, index) => (
                <div
                  key={index}
                  className="aspect-square relative overflow-hidden"
                >
                  <Image
                    fill
                    src={url}
                    alt={`${product.name} view ${index + 2}`}
                    className="object-cover object-center hover:opacity-75 
                      transition-opacity"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

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
