import { getApiOrigin } from "../utils/apiBase";

// Frontend API Service for Products (`/api/products` on the backend)
const API_BASE_URL =
  import.meta.env.VITE_APP_API_URL ||
  (getApiOrigin() ? `${getApiOrigin()}/api` : "/api");

class ProductService {
  // Get all products with optional filters
  static async getAllProducts(filters = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      if (filters.category) queryParams.append('category', filters.category);
      if (filters.recommended) queryParams.append('recommended', 'true');

      const url = `${API_BASE_URL}/products${queryParams.toString() ? `?${queryParams}` : ''}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        return data.data;
      } else {
        throw new Error(data.message || 'Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  // Get single product by ID
  static async getProductById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Product not found');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        return data.data;
      } else {
        throw new Error(data.message || 'Failed to fetch product');
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }

  // Get products by category
  static async getProductsByCategory(category) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        return data.data;
      } else {
        throw new Error(data.message || 'Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  }

  // Get related products
  static async getRelatedProducts(productId) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${productId}/related`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        return data.data;
      } else {
        throw new Error(data.message || 'Failed to fetch related products');
      }
    } catch (error) {
      console.error('Error fetching related products:', error);
      throw error;
    }
  }
}

export default ProductService;