import { useState, useEffect } from "react";
import ProductService from "../services/productService";
import { useLoader } from "../context/LoaderContext";

export const useProducts = (filters = {}) => {
  const [products, setProducts] = useState([]);
  const { showLoader, hideLoader } = useLoader();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        showLoader();
        setError(null);
        const data = await ProductService.getAllProducts(filters);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        console.error("Error in useProducts:", err);
      } finally {
        hideLoader();
      }
    };

    fetchProducts();
  }, [JSON.stringify(filters)]);

  return { products, error };
};

export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const { showLoader, hideLoader } = useLoader();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      hideLoader();
      return;
    }

    const fetchProduct = async () => {
      try {
        showLoader();
        setError(null);
        const data = await ProductService.getProductById(productId);
        setProduct(data);
      } catch (err) {
        setError(err.message);
        console.error("Error in useProduct:", err);
      } finally {
        hideLoader();
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, error };
};

// Custom hook for fetching products by category
export const useProductsByCategory = (category) => {
  const [products, setProducts] = useState([]);
  const { showLoader, hideLoader } = useLoader();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) {
      hideLoader();
      return;
    }

    const fetchProducts = async () => {
      try {
        showLoader();
        setError(null);
        const data = await ProductService.getProductsByCategory(category);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        console.error("Error in useProductsByCategory:", err);
      } finally {
        hideLoader();
      }
    };

    fetchProducts();
  }, [category]);

  return { products, error };
};

export const useRelatedProducts = (productId) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { showLoader, hideLoader } = useLoader();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      hideLoader();
      return;
    }

    const fetchRelatedProducts = async () => {
      try {
        showLoader();
        setError(null);
        const data = await ProductService.getRelatedProducts(productId);
        setRelatedProducts(data);
      } catch (err) {
        setError(err.message);
        console.error("Error in useRelatedProducts:", err);
      } finally {
        hideLoader();
      }
    };

    fetchRelatedProducts();
  }, [productId]);

  return { relatedProducts, error };
};
