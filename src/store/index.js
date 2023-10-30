import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/auth-slice";
import offerReducer from "./slices/offer/offer-slice";
import favoriteReducer from "./slices/favorite/favorite-slice"
import shoppingCartReducer from "./slices/shopping-cart/shopping-cart-slice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        offer: offerReducer,
        favorite: favoriteReducer,
        shoppingCart:shoppingCartReducer,
    }
});

export { loginSuccess, loginFailure, logout } from "./slices/auth/auth-slice";
export { setOffers, setProduct } from "./slices/offer/offer-slice";
export { setModel, setUser} from "./slices/favorite/favorite-slice"
export { addToCart, removeFromCart } from "./slices/shopping-cart/shopping-cart-slice";
