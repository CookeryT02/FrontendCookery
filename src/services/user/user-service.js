import axios from "axios";
import { services } from "..";

const API_URL = "https://order-management-backend-v4-ae27edbd92c7.herokuapp.com";

// COMMON ENDPOINTS
export const login = async (payload) => {
    const response = await axios.post(`${API_URL}/login`, payload);
    return response.data;
};
export const register = async (payload) => {
    try {
        const response = await axios.post(`${API_URL}/register`, payload);

        if (response.data) {
            return response.data;
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        // Hata durumunu yönetmek için
        throw new Error(error.response?.data?.message || 'An error occurred');
    }
};

// USER ENDPOINTS
export const getUser = async () => {
    const response = await axios.get(`${API_URL}/users/auth`, services.authHeader());
    return response.data;
};
export const updatePassword = async (dto) => {
    console.log(dto)
    const response = await axios.patch(`${API_URL}/users/auth`, dto, services.authHeader());
    console.log(response)
    return response.data;
};
export const updateUser = async (userInfo) => {
    console.log(userInfo)
    const response = await axios.put(`${API_URL}/users/auth`, userInfo, services.authHeader());
    console.log(response)
    return response.data;
};

// ADMIN ENDPOINTS
export const deleteUser = async (id) => {
    const response = axios.delete(`${API_URL}/users/${id}/auth`, services.authHeader());
    return response.data;
};

export const downloadUserReports = async () => {
    const token = services.encryptedLocalStorage.getItem("pickanddrivetoken");
    const response = await axios.get(`${API_URL}/excel/download/users`,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            responseType: "blob"
        }
    );
    return response.data;
};

export const getUserAdmin = async (id) => {
    const response = await axios.get(`${API_URL}/user/${id}/auth`, services.authHeader());
    return response.data;
};

export const getUsersByPage = async (page = 0, size = 20, sort = "createAt", direction = "DESC") => {
    const response = await axios.get(`${API_URL}/users/admin?q=admin&page=${page}&size=${size}&sort=${sort}&type=${direction}`, services.authHeader());
    return response.data;
};

export const updateUserAdmin = async (id, payload) => {
    const response = await axios.put(`${API_URL}/user/${id}/auth`, payload, services.authHeader());
    return response.data;
};