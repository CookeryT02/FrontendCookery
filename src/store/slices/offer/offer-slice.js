import { createSlice } from "@reduxjs/toolkit";

const offerSlice = createSlice({
    name: 'offer',
    initialState: {
        product: null,
        offers: null,
    },
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
        setOffers: (state, action) => {
            state.offers = action.payload;
        },
    }
});

export const { setOffers, setProduct } = offerSlice.actions;
export default offerSlice.reducer;