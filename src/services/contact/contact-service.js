import axios from "axios";
import { services } from "..";

const API_URL = "https://order-management-backend-v4-ae27edbd92c7.herokuapp.coms";

// COMMON ENDPOINTS
export const sendMessage = async (message) => {
    const response = await axios.post(`${API_URL}/contact-messages`, message);
    return response.data;
}

// ADMIN ENDPOINTS
export const getMessagesByPage = async (
    page = 0,
    size = 20,
    sort = "id",
    direction = "DESC"
) => {
    const response = await axios.get(`${API_URL}/contactmessage/pages?page=${page}&size=${size}&sort=${sort}&direction=${direction}`, services.authHeader());
    return response.data;
};
export const getMessage = async (id) => {
    const response = await axios.get(`${API_URL}/contactmessage/${id}`, services.authHeader());
    return response.data;
}
export const deleteMessage = async (id) => {
    const response = await axios.delete(`${API_URL}/contactmessage/${id}`, services.authHeader());
    return response.data;
}