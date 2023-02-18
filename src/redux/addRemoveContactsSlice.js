import { createSlice } from '@reduxjs/toolkit';
import defaultContacts from 'components/DefaultContacts/defaultContacts';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: defaultContacts,
        filterValue: '',
    },

    reducers: {
        addNewContact: (state, { payload }) => {
            state.contacts.push(payload);
        },

        removeContact: (state, { payload }) => {
            state.contacts = state.contacts.filter(
                contact => contact.id !== payload
            );
        },
        filterContact: (state, { payload }) => {
            state.filterValue = payload;
        },
    },
});

export const { addNewContact, removeContact, filterContact } =
    contactsSlice.actions;
export const rootReducer = contactsSlice.reducer;
