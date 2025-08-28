import { useParams, useLocation } from "react-router-dom";
import { newArrivalProducts, mostPopularProducts } from "../../constants/index";

export default function ProductDetail() {
  const { slug } = useParams();
  const { state } = useLocation();
  const { selectedColor, selectedSize } = state || {};
  const allProducts = [...newArrivalProducts, ...mostPopularProducts];

  // Debug: Log the slug and available slugs
  console.log("URL Slug:", slug);
  console.log(
    "Available Slugs:",
    allProducts.map((p) => p.slug)
  );

  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div>
        <h2 className="text-center mt-10">Product Not Found</h2>
        <p>Slug: {slug}</p>
        <p>Available Slugs: {allProducts.map((p) => p.slug).join(", ")}</p>
      </div>
    );
  }

  const displayImage =
    selectedColor && product.colorImages?.[selectedColor]
      ? product.colorImages[selectedColor]
      : product.image || Object.values(product.colorImages || {})[0];
  const displayPrice =
    selectedColor && product.colorPrices?.[selectedColor]
      ? product.colorPrices[selectedColor]
      : product.price;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <img
        src={displayImage}
        alt={product.title}
        className="w-full h-96 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-6">{product.title}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl font-semibold mt-4">${displayPrice.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mt-2">Category: {product.category}</p>
      {selectedColor && (
        <p className="text-sm text-gray-500 mt-2">Color: {selectedColor}</p>
      )}
      {selectedSize && (
        <p className="text-sm text-gray-500 mt-2">Size: {selectedSize}</p>
      )}
    </div>
  );
}