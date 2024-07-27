import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addNewContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectFilter } from "./filtersSlice";
import { initialState } from "./initialState";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialState.contacts,
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
                // state.contactsArr.push(action.payload)
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
    [selectContacts, selectFilter]
    , (contactsList, filterList) => {
        return contactsList.filter((contact) =>
            contact.name.toLowerCase().includes(filterList.toLowerCase()))
    })

