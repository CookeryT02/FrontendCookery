import { deleteMessage, getMessage, getMessagesByPage, sendMessage } from "./contact/contact-service";

import {getOneCategory} from './category/category-service'

import { deleteUser, downloadUserReports, getUser, getUserAdmin, getUsersByPage, login, register, updatePassword, updateUser, updateUserAdmin } from "./user/user-service";

import { getFeaturedProducts, getProductsByPage, getAllCategories, getProductsByCategoryId } from "./product/product-service"

import { encryptedLocalStorage } from "./encrypt-storage/encrypt-storage";
import { authHeader } from "./auth-header/auth-header";

export const services = {
    contact: {
        // COMMON ENDPOINTS
        sendMessage,
        // ADMIN ENDPOINTS
        deleteMessage,
        getMessage,
        getMessagesByPage,
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
        getAllCategories,
        getProductsByCategoryId,
    },
    category:{
        //COMMON ENDPOINTS

        //ADMIN ENDPOINTS
        getOneCategory,
    },
    encryptedLocalStorage,
    authHeader
}