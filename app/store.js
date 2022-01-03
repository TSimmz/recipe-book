import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../features/accountSlice';
import recipeBooksReducer from '../features/recipeBooksSlice';
import recipeReducer from '../features/recipeSlice';

export default store = configureStore({
  reducer: {
    accountReducer,
    recipeBooksReducer,
    recipeReducer,
  },
});
