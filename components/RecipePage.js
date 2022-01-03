const RecipePage = ({ recipe }) => {
  const renderServingSize = () => {
    return 0;
  };
  const renderIngredients = () => {
    return <h2>Ingredients</h2>;
  };
  const renderSteps = () => {
    return <h2>Steps</h2>;
  };

  return (
    <div>
      <div>
        <h1>{recipe.title}</h1>
      </div>
      <p>
        <span>{`Cook Time: ${0}`}</span>
        <span>{`Serving Size: ${0}`}</span>
      </p>
      {renderIngredients()}
      {renderSteps()}
    </div>
  );
};

export default RecipePage;
