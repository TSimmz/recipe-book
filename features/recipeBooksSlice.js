import { createSlice } from '@reduxjs/toolkit';

export const recipeBooksSlice = createSlice({
  name: 'recipeBooks',
  initialState: {
    isBookSidebarOpen: false,
    recipeBooks: [],
  },
  reducers: {
    toggleIsBookSidebarOpen: (state) =>
      (state.isBookSidebarOpen = !state.isBookSidebarOpen),
    addRecipeBook: (state, action) => state.recipeBooks.push(action.payload),
    removeRecipeBook: (state, action) =>
      (state.recipeBooks = state.recipeBooks.filter(
        (book) => book.id != action.payload.id
      )),
    addRecipeToBook: (state, action) => {
      state.recipeBooks
        .find((book) => book.id === action.payload.id)
        .recipes.push(action.payload.recipe);
    },
  },
});

export const {
  toggleIsBookSidebarOpen,
  addRecipeBook,
  removeRecipeBook,
  addRecipeToBook,
} = recipeBooksSlice.actions;

export default recipeBooksSlice.reducer;
