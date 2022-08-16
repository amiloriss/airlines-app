import { createSlice } from '@reduxjs/toolkit';
import airlinesTickets from '../../../data/tickets.json';

export const airlinesSlice = createSlice({
    name: 'airlinesTickets',
    initialState: airlinesTickets,
    reducers: {
        sortAirlinesTickets: (state, action) => {
            if (action.payload.includes('all')) {
                state.tickets = airlinesTickets.tickets;
            } else {
                const selectedTickets = airlinesTickets.tickets.filter(
                    (ticket) =>
                        action.payload
                            .map((stop: string) => Number(stop))
                            .includes(ticket.stops)
                );
                state.tickets = [...selectedTickets];
            }
        },
    },
});

export const { sortAirlinesTickets } = airlinesSlice.actions;

export default airlinesSlice.reducer;
