import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from '../features/airlines/airlinesTicketsSlice';
import currencyReducer from '../features/currency/currencySlice';

const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        currency: currencyReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
