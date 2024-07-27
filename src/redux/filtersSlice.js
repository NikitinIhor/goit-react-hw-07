import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: "filter",
    initialState: {
        filters: {
            name: "",
        }
    },
    reducers: {
        filterContacts: (state, action) => {
            state.filters.name = action.payload
        }
    }
})
export const selectFilter = (state) => state.filters.filters.name
export const { filterContacts } = filtersSlice.actions

export default filtersSlice.reducer