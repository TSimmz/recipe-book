import Hamburger from '../assets/icons/hamburger.svg';
import Gear from '../assets/icons/gear.svg';
import Edit from '../assets/icons/edit.svg';
import PlusCircle from '../assets/icons/plus-circle-outlined.svg';

const RecipeNav = () => {
  const isSidebarOpen = true;
  const bookPath = 'TestBook > TestRecipe';

  // const renderRecipeBookPath = () => {
  //   return <h3>{bookPath}</h3>;
  // };

  // const renderCreateButton = () => {
  //   return (
  //     <button>
  //       <p>Create</p>
  //       <PlusCircle />
  //     </button>
  //   );
  // };

  return (
    <nav>
      <h3>{bookPath}</h3>
      {/*renderRecipeBookPath()*/}
      <div></div>
      {/*isSidebarOpen && renderCreateButton()*/}
    </nav>
  );
};

export default RecipeNav;
