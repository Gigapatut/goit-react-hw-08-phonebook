import { createSlice } from '@reduxjs/toolkit';
const filterInitialState = {
  filter: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
      
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
