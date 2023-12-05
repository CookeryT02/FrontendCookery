import { deleteMessage, getMessage, getMessagesByPage, sendMessage } from "./contact/contact-service";

import { getOffersByPage, getTodaysOffersByPage } from "./offer/offer-service";

import { deleteUser, downloadUserReports, getUser, getUserAdmin, getUsersByPage, login, register, updatePassword, updateUser, updateUserAdmin } from "./user/user-service";

import { getFeaturedProducts, getProductsByPage, getProductsByCategoryId, } from "./product/product-service"

import { encryptedLocalStorage } from "./encrypt-storage/encrypt-storage";
import { authHeader } from "./auth-header/auth-header";
import { getOneCategory, getAllCategories, } from "./category/category-service"
import { getBrandsByPage } from "./brand/brand"

export const services = {
    contact: {
        // COMMON ENDPOINTS
        sendMessage,
        // ADMIN ENDPOINTS
        deleteMessage,
        getMessage,
        getMessagesByPage,
    },
    offer: {
        // COMMON ENDPOINTS
        //createReservation,
        //getReservationById,
        getOffersByPage,
        getTodaysOffersByPage,
        //isVehicleAvailable,
        // ADMIN ENDPOINTS
        // deleteReservation,
        //downloadReservationReports,
        // getReservationByIdAdmin,
        //getReservationsByPageAdmin,
        //updateReservation,
    },
    user: {
        // COMMON ENDPOINTS
        login,
        register,
        // USER ENDPOINTS
        getUser,
        updateUser,
        updatePassword,
        // ADMIN ENDPOINTS
        deleteUser,
        downloadUserReports,
        getUserAdmin,
        getUsersByPage,
        updateUserAdmin,
    },
    product: {
        // COMMON ENDPOINTS
        getFeaturedProducts,
        getProductsByPage,
        // ADMIN ENDPOINTS

        getProductsByCategoryId,
        getBrandsByPage,
    },
    categories: {
        getOneCategory,
        getAllCategories,
    },
    brand: {
        getBrandsByPage,
    },
    encryptedLocalStorage,
    authHeader
}