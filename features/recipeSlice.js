import { createSlice } from '@reduxjs/toolkit';

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    title: '',
    cookTimeHrs: 0,
    cookTimeMin: 0,
    servingSize: 0,
    ingredients: [],
    steps: [],
  },
  reducers: {
    setTitle: (state, action) => (state.title = action.payload),
    clearTitle: (state) => (state.title = ''),
    setCookTimeHrs: (state, action) => (state.cookTimeHrs = action.payload),
    clearCookTimeHrs: (state) => (state.cookTimeHrs = 0),
    setCookTimeMin: (state, action) => (state.cookTimeMin = action.payload),
    clearCookTimeMin: (state) => (state.cookTimeMin = 0),
    setServingSize: (state, action) => (state.servingSize = action.payload),
    clearServingSize: (state) => (state.servingSize = 0),
    addIngredient: (state, action) => state.ingredients.push(action.payload),
    removeIngredient: (state, action) =>
      (state.ingredients = state.ingredients.filter(
        ingredient.id != action.payload.id
      )),
    addStep: (state, action) => state.steps.push(action.payload),
    removeStep: (state, action) =>
      (state.steps = state.steps.filter(
        (step) => step.id != action.payload.id
      )),
  },
});

export const {
  setTitle,
  clearTitle,
  setCookTimeHrs,
  setCookTimeMin,
  clearCookTimeHrs,
  clearCookTimeMin,
  setServingSize,
  clearServingSize,
  addIngredient,
  removeIngredient,
  addStep,
  removeStep,
} = recipeSlice.actions;

export default recipeSlice.reducer;
