import axios from 'axios';
import { services } from '..';

const API_URL = "https://order-management-backend-v4-ae27edbd92c7.herokuapp.com";

export const getBrandsByPage = async (page = 0, size = 6, sort = "name", direction = "ASC") => {
    const response = await axios.get(`${API_URL}/brands?page=${page}&size=${size}&sort=${sort}&type=${direction}`, services.authHeader());
    return response.data;
};