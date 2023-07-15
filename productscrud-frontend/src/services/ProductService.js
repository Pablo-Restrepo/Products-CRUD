import axios from "axios"

const PRODUCT_BASE_REST_API_URL = "http://localhost:8080/products";

class ProductService {
    getAllProducts() {
        return axios.get(PRODUCT_BASE_REST_API_URL);
    }

    getProductById(productId) {
        return axios.get(`${PRODUCT_BASE_REST_API_URL}/${productId}`);
    }

    createProduct(product) {
        return axios.post(PRODUCT_BASE_REST_API_URL, product);
    }

    updateProduct(productId, product) {
        return axios.put(`${PRODUCT_BASE_REST_API_URL}/${productId}`, product);
    }

    deleteProduct(productId) {
        return axios.delete(`${PRODUCT_BASE_REST_API_URL}/${productId}`);
    }
}

export default new ProductService();