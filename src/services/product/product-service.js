import axios from 'axios';
import { services } from '..';

const API_URL = "https://order-management-backend-v4-ae27edbd92c7.herokuapp.com";

// COMMON ENDPOINTS

export const getFeaturedProducts = async () => {
    const response = await axios.get(`${API_URL}/products/featured`, services.authHeader());
    return response.data;
};

export const getProductsByPage = async (page = 0, size = 6, sort = "category", direction = "ASC") => {
    const response = await axios.get(`${API_URL}/products?q&page=${page}&size=${size}&sort=${sort}&type=${direction}`, services.authHeader());
    return response.data;
};

export const getBrandsByPage = async (page = 0, size = 6, sort = "name", direction = "ASC") => {
    const response = await axios.get(`${API_URL}/brands?page=${page}&size=${size}&sort=${sort}&type=${direction}`, services.authHeader());
    return response.data;
};


export const getAllCategories = async () => {
    const response = await axios.get(`${API_URL}/categories`, services.authHeader());
    return response.data;
};

export const getProductsByCategoryId = async (id) => {
    const response = await axios.get(`${API_URL}/categories/${id}/products`, services.authHeader());
    return response.data;
};
/*
export const getVehicleById = async (id) => {

    export const getVehicles = async () => {
        const response = await axios.get(`${API_URL}/car/visitors/all`);
        return response.data;
    };
    export const getVehiclesByPage = async (page = 0, size = 6, sort = "model", direction = "ASC") => {
        const response = await axios.get(`${API_URL}/car/visitors/pages?page=${page}&size=${size}&sort=${sort}&direction=${direction}`);
        return response.data;
    };

    // ADMIN ENDPOINTS
    export const addVehicle = async (imageId, payload) => {
        const response = await axios.post(`${API_URL}/car/admin/${imageId}/add`, payload, services.authHeader());
        return response.data;
    };

    export const deleteVehicle = async (id) => {
        const response = await axios.delete(`${API_URL}/car/admin/${id}/auth`, services.authHeader());
        return response.data;
    };

    export const deleteVehicleImage = async (id) => {
        const response = await axios.delete(`${API_URL}/files/${id}`, services.authHeader());
        return response.data;
    };

    export const downloadVehicleReports = async () => {
        const token = services.encryptedLocalStorage.getItem("pickanddrivetoken");
        const response = await axios.get(`${API_URL}/excel/download/cars`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                responseType: "blob"
            }
        );
        return response.data;
    };
    export const updateVehicle = async (vehicleId, imageId, payload) => {
        const response = await axios.put(`${API_URL}/car/admin/auth?id=${vehicleId}&imageId=${imageId}`, payload, services.authHeader());
        return response.data;
    };

    export const uploadVehicleImage = async (file) => {
        const response = await axios.post(`${API_URL}/files/upload`, file, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${services.encryptedLocalStorage.getItem("pickanddrivetoken")}`
            }
        })
        return response.data;
    }; */