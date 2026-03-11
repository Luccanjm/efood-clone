import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isOpen: false,
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
      state.isOpen = true;
    },
    remove: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, remove, toggleCart, clear } = cartSlice.actions;
export default cartSlice.reducer;