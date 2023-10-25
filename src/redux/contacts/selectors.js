import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.data.contacts;
export const selectIsLoading = state => state.data.contacts.isLoading;
export const selectError = state => state.data.contacts.error;
export const selectValueFilter = state => state.sorting.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectValueFilter],
  (contacts, filter) =>
    contacts.items.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    )
);

export const selectNameContacts = createSelector([selectContacts], contacts =>
  contacts.items.map(el => el.name)
);
