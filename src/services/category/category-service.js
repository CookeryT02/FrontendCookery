import axios from 'axios';
import { services } from '../../services';

const API_URL = "https://order-management-backend-v4-ae27edbd92c7.herokuapp.com";

// COMMON ENDPOINTS

export const getAllCategories = async () => {
    const response = await axios.get(`${API_URL}/categories`, services.authHeader());
    return response.data;
};

export const getOneCategory = async (id) => {
    const response = await axios.get(`${API_URL}/categories/${id}`, services.authHeader());
    return response.data;
};