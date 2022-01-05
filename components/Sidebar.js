import PlusCircle from '../assets/icons/plus-circle-outlined.svg';

const Sidebar = ({ type }) => {
  const renderRecipeList = () => {
    return data.map((item) => {
      return <p>item.title</p>;
    });
  };

  return (
    <aside className='w-[220px] py-4 px-4 bg-amber-200 overflow-hidden'>
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
