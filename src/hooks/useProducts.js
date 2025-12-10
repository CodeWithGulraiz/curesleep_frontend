import { useState, useEffect } from 'react';
import ProductService from '../services/productService';

// Custom hook for fetching all products
export const useProducts = (filters = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await ProductService.getAllProducts(filters);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        console.error('Error in useProducts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [JSON.stringify(filters)]); // Re-fetch when filters change

  return { products, loading, error };
};

// Custom hook for fetching a single product
export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await ProductService.getProductById(productId);
        setProduct(data);
      } catch (err) {
        setError(err.message);
        console.error('Error in useProduct:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};

// Custom hook for fetching products by category
export const useProductsByCategory = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) {
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await ProductService.getProductsByCategory(category);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        console.error('Error in useProductsByCategory:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, loading, error };
};

// Custom hook for fetching related products
export const useRelatedProducts = (productId) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      setLoading(false);
      return;
    }

    const fetchRelatedProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await ProductService.getRelatedProducts(productId);
        setRelatedProducts(data);
      } catch (err) {
        setError(err.message);
        console.error('Error in useRelatedProducts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [productId]);

  return { relatedProducts, loading, error };
};