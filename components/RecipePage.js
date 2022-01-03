const RecipePage = () => {
  const renderServingSize = () => {
    return 0;
  };
  //const renderIngredients = () => {};
  //const renderSteps = () => {};

  return (
    <div>
      <div>
        <h1>{recipe.title}</h1>
      </div>
      <p>
        <span>{`Cook Time: ${0}`}</span>
        <span>{`Serving Size: ${0}`}</span>
      </p>
      <h2>Ingredients</h2>
      {/*renderIngredients()*/}
      {/*renderSteps()*/}
    </div>
  );
};

export default RecipePage;
