import React, { useState } from "react";
import { Link } from "react-router-dom";

const DynamicproductsCard = ({ product }) => {
  const hasVariants =
    product?.type === "popular" && product?.colorImages && product?.colorPrices;

  // Initialize states for color and size if variants exist
  const [selectedColor, setSelectedColor] = useState(
    hasVariants ? Object.keys(product.colorImages)[0] : null
  );
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <Link
      to={{
        pathname: `/product/${product.slug}`,
        state: { selectedColor, selectedSize }, // Pass selected color and size
      }}
    >
      <div className="bg-white overflow-hidden transition-all duration-300 max-w-full">
        <div className="text-center p-4">
          {/* Product Image */}
          {hasVariants && selectedColor ? (
            <img
              src={product.colorImages[selectedColor]}
              alt={product.title}
              className="w-full max-w-[22rem] h-auto object-cover mx-auto "
            />
          ) : (
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-[18rem] h-auto object-cover mx-auto rounded-md"
            />
          )}

          {/* Category */}
          <p className="text-gray-500 mt-2 text-sm">{product.category}</p>

          {/* Title */}
          <h2 className="text-lg font-serif text-gray-800">{product.title}</h2>

          {/* Description */}
          {product.description && (
            <p className="text-gray-600 text-sm">{product.description}</p>
          )}

          {/* Price */}
          <p className="font-bold text-gray-600">
            {hasVariants && selectedColor
              ? `$${product.colorPrices[selectedColor].toFixed(2)}`
              : `$${product.price.toFixed(2)}`}
          </p>

          {/* Size Options */}
          <div className="flex justify-center gap-2 mt-3">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                onClick={(e) => {
                  e.preventDefault(); // prevent link navigation
                  e.stopPropagation(); // stop bubbling
                  setSelectedSize(size);
                }}
                className={`px-3 py-1 border rounded-md hover:border-gray-500 text-sm ${
                  selectedSize === size
                    ? "border-gray-800 bg-gray-100"
                    : "border-gray-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Color Options */}
          {hasVariants && (
            <div className="flex justify-center gap-3 mt-4">
              {Object.keys(product.colorImages).map((color) => (
                <button
                  key={color}
                  onClick={(e) => {
                    e.preventDefault(); // prevent link navigation
                    e.stopPropagation(); // stop bubbling
                    setSelectedColor(color);
                  }}
                  className={`w-6 h-6 rounded-full border ${
                    selectedColor === color
                      ? "ring-2 ring-offset-2 ring-gray-600"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select ${color} color`}
                ></button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default DynamicproductsCard;