import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        model: null,
        user: null,
    },
    reducers: {
        addToCart: (state, action) => {
            state.model = action.payload.model;
            state.user = action.payload.user;
        },
        removeFromCart: (state) => {
            state.model = null;
            state.user = null;
        }
    }
});

export const { addToCart, removeFromCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;