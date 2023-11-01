import { createSlice } from "@reduxjs/toolkit";

const offerSlice = createSlice({
    name: "offer",
    initialState: {
        offers: null,
        user: {},
        products: null
    },
    reducers: {
        setOffers: (state, action) => {
            state.offers = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setOffers, setUser, setProducts } = offerSlice.actions;
export default offerSlice.reducer;