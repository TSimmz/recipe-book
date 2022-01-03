const RecipePage = ({ recipe }) => {
  const renderServingSize = () => {};
  const renderIngredients = () => {};
  const renderSteps = () => {};

  return (
    <div>
      <div>
        <h1>{recipe.title}</h1>
      </div>
      <p>
        <span>{`Cook Time: ${recipe.cookTime}`}</span>
        <span>{`Serving Size: ${renderServingSize()}`}</span>
      </p>
      <h2>Ingredients</h2>
      {renderIngredients()}
      {renderSteps()}
    </div>
  );
};

export default RecipePage;
