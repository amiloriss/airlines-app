import { createSlice } from '@reduxjs/toolkit';

export const currencySlice = createSlice({
    name: 'currency',
    initialState: '',
    reducers: {
        changeCurrency: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
