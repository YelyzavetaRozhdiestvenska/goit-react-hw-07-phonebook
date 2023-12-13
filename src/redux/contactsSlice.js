import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: builder => {
    builder
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  // redusers: {
  //   // Виконається в момент старту HTTP-запиту
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   // Виконається якщо HTTP-запит завершився успішно
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   // Виконається якщо HTTP-запит завершився з помилкою
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contacts,
//   reducers: {
//     addContact(state, action) {
//       state.items.push(action.payload);
//     },
//     removeContact(state, action) {
//       const index = state.items.findIndex(
//         contact => contact.id !== action.payload
//       );
//       state.items.splice(index, 1);
//     },
//   },
// });

// export const { addContact, removeContact } = contactsSlice.actions;

// export const contactsReducer = persistReducer(
//   { key: 'contacts', storage },
//   contactsSlice.reducer
// );
