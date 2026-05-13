import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct, useProducts } from "../hooks/useProducts";
import ProductDetailView from "./product/ProductDetailView";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { categoryName, productId } = useParams();
  const { products } = useProducts();
  const { product, error } = useProduct(productId);

  if (!product && !error) {
    return (
      <h2 className="text-center mt-20 text-2xl text-gray-600">
        Loading product…
      </h2>
    );
  }

  if (error || !product) {
    return (
      <h2 className="text-center mt-20 text-2xl">
        {error ? "Something went wrong" : "Product not found"}
      </h2>
    );
  }

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="hover:text-green-600 cursor-pointer">Home</span>
              <span>/</span>
              <span
                onClick={() => navigate("/categories")}
                className="hover:text-green-600 cursor-pointer"
              >
                Category
              </span>
              <span>/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <ProductDetailView
            product={product}
            categoryName={categoryName}
            products={products}
            buildRelatedPath={(id) =>
              `/category/${categoryName}/${id}/details/`
            }
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
