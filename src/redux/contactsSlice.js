import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addNewContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [
            { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
            { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
            { id: "id-3", name: "Eden Clements", number: "645-17-79" },
            { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ],
        loading: false,
        error: false,

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(addNewContact.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(addNewContact.fulfilled, (state, action) => {
                state.loading = false
                state.items = [...state.items, action.payload]
            })
            .addCase(addNewContact.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(deleteContact.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false
                state.items = state.items
                    .filter(item => item.id !== action.payload.id
                    )
            })
            .addCase(deleteContact.rejected, (state) => {
                state.loading = false
                state.error = true
            })
    }
})

export const selectContacts = (state) => state.contacts.items
export const selectLoading = (state) => state.contacts.loading
export const selectError = (state) => state.contacts.error
export default contactsSlice.reducer

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter]
    , (contactsList, filterList) => {
        return contactsList.filter((contact) =>
            contact.name.toLowerCase().includes(filterList.toLowerCase()))
    })

