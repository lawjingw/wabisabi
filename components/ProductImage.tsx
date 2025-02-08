import Image from "next/image";

type ProductImageProps = {
  product: {
    imageUrls?: string[];
    name: string;
  };
};

function ProductImage({ product }: ProductImageProps) {
  return (
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
            <div key={index} className="aspect-square relative overflow-hidden">
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
  );
}

export default ProductImage;
