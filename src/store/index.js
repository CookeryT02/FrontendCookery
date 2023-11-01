import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth/auth-slice";
import offerReducer from "./slice/offer/offer-slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        offer: offerReducer,
    },
});

export { loginFailure, loginSuccess, logout } from "./slice/auth/auth-slice";
export { setOffers, setUser, setProducts } from "./slice/offer/offer-slice";