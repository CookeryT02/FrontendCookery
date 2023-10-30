import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        model: null,
        user: null,
    },
    reducers: {
        setModel: (state, action) => {
            state.model = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { setModel, setUser} = favoriteSlice.actions;
export default favoriteSlice.reducer;