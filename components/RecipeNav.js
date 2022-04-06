import Hamburger from '../assets/icons/hamburger.svg';
import Gear from '../assets/icons/gear.svg';
import Edit from '../assets/icons/edit.svg';
import TrashCan from '../assets/icons/trash.svg';
import PlusCircle from '../assets/icons/plus-circle-outlined.svg';

const RecipeNav = () => {
  const isSidebarOpen = true;
  const bookPath = 'TestBook > TestRecipe';

  const renderRecipeBookPath = () => {
    return <h3>{bookPath}</h3>;
  };

  const renderCreateButton = () => {
    return (
      <button>
        <p>Create</p>
        <PlusCircle />
      </button>
    );
  };

  return (
    <nav className='flex justify-between items-center px-6 bg-orange-400 h-[35px] w-full'>
      <div className='flex gap-4'>
        <button>
          <Hamburger />
        </button>
        {renderRecipeBookPath()}
      </div>

      <div className='flex gap-4'>
        <button>
          <TrashCan />
        </button>
        <button>
          <Edit />
        </button>
        <button>
          <Gear />
        </button>
        {!isSidebarOpen && renderCreateButton()}
      </div>
    </nav>
  );
};

export default RecipeNav;
