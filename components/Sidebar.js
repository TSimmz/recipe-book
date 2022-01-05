import PlusCircle from '../assets/icons/plus-circle-outlined.svg';

const Sidebar = ({ type }) => {
  const renderRecipeList = () => {
    return data.map((item) => {
      return <p>item.title</p>;
    });
  };

  return (
    <aside className='w-[300px] py-4 px-4 bg-amber-200 overflow-hidden drop-shadow-[5px_0_5px_rgba(0,0,0,0.25)] drop '>
      <div className='flex border-b-2 border-black px-1 py-2 justify-between'>
        <h1 className='text-xl '>{type}</h1>
        <button>
          <PlusCircle />
        </button>
      </div>
      {/*renderRecipeList()*/}
    </aside>
  );
};

export default Sidebar;
