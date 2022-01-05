const RecipePage = ({ recipe }) => {
  const renderServingSize = () => {
    return 0;
  };
  const renderIngredients = () => {
    return <h2 className='text-2xl underline mb-8'>Ingredients</h2>;
  };
  const renderSteps = () => {
    return <h2 className='text-2xl underline'>Steps</h2>;
  };

  return (
    <div className='bg-yellow-100 w-full px-16 py-12 overflow-hidden'>
      <div className='px-4 py-5 border-b-4 border-black mb-4'>
        <h1 className='text-5xl'>{recipe.title}</h1>
      </div>
      <p className='italic flex gap-4 mb-8'>
        <span>{`Cook Time: ${0}`}</span>
        <span>{`Serving Size: ${0}`}</span>
      </p>
      {renderIngredients()}
      {renderSteps()}
    </div>
  );
};

export default RecipePage;
