import axios from "axios";
import { services } from "..";

const API_URL = "https://order-management-backend-v4-ae27edbd92c7.herokuapp.com";

// COMMON ENDPOINTS
export const createReservation = async (carId, dto) => {
    const response = await axios.post(`${API_URL}/reservations/add?carId=${carId}`, dto, services.authHeader());
    return response.data;
};

export const getReservationById = async (id) => {
    const response = await axios.get(`${API_URL}/reservations/${id}/auth`, services.authHeader());
    return response.data;
};

export const getOffersByPage = async (status = 0, startingDate = "2023-01-01T00:00:00", endingDate = new Date().toISOString().slice(0, 19), page = 0, size = 20, sort = "createAt", direction = "DESC") => {
    const response = await axios.get(
        `${API_URL}/offers/admin?q=&status=${status}&startingDate=${startingDate}&endingDate=${endingDate}&page=${page}&size=${size}&sort=${sort}&type=${direction}`,
        services.authHeader(),
    );
    return response.data;
};

export const getTodaysOffersByPage = async (status = 0, startingDate = new Date().toISOString().slice(0, 10) + "T00:00:00", endingDate = new Date().toISOString().slice(0, 19), page = 0, size = 20, sort = "createAt", direction = "DESC") => {
    const response = await axios.get(
        `${API_URL}/offers/admin?q=&status=${status}&startingDate=${startingDate}&endingDate=${endingDate}&page=${page}&size=${size}&sort=${sort}&type=${direction}`,
        services.authHeader(),
    );
    console.log(startingDate)
    console.log(endingDate)
    return response.data;
};

export const isVehicleAvailable = async (payload) => {
    const { carId, pickUpDateTime, dropOffDateTime } = payload;
    const response = await axios.get(`${API_URL}/reservations/auth?carId=${carId}&pickUpDateTime=${pickUpDateTime}&dropOffDateTime=${dropOffDateTime}`, services.authHeader());
    return response.data;
};


// ADMIN ENDPOINTS
export const deleteReservation = async (id) => {
    const response = await axios.delete(`${API_URL}/reservations/admin/${id}/auth`, services.authHeader());
    return response.data;
};

export const downloadReservationReports = async () => {
    const token = services.encryptedLocalStorage.getItem("pickanddrivetoken");
    const response = await axios.get(`${API_URL}/excel/download/reservations`,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            responseType: "blob"
        }
    );
    return response.data;
};

export const getReservationByIdAdmin = async (id) => {
    const response = await axios.get(`${API_URL}/reservations/${id}/admin`, services.authHeader());
    return response.data;
};

export const getReservationsByPageAdmin = () => { };

export const updateReservation = async (carId, reservationId, payload) => {
    const response = await axios.put(`${API_URL}/reservations/admin/auth?carId=${carId}&reservationId=${reservationId}`, payload, services.authHeader());
    return response.data;
};
