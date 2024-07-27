import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
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
export const selectFilter = (state) => state.filter.filters.name
export const { filterContacts } = filterSlice.actions

export default filterSlice.reducer