import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addNewContact, deleteContact, fetchContacts } from "../contacts_api";
import { selectFilter } from "./filterSlice";


const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contactsArr: [],
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
                state.contactsArr = action.payload
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
                state.contactsArr = [...state.contactsArr, action.payload]
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
                state.contactsArr = state.contactsArr
                    .filter(contact => contact.id !== action.payload.id
                    )
            })
            .addCase(deleteContact.rejected, (state) => {
                state.loading = false
                state.error = true
            })
    }
})

export const selectContacts = (state) => state.contacts.contactsArr
export const selectLoading = (state) => state.contacts.loading
export const selectError = (state) => state.contacts.error
export default contactsSlice.reducer

export const onfiltredContacts = createSelector(
    [selectContacts, selectFilter]
    , (contactsList, filterList) => {
        return contactsList.filter((contact) =>
            contact.name.toLowerCase().includes(filterList.toLowerCase()))
    })

