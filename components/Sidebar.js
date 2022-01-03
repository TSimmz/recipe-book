import PlusCircle from '../assets/icons/plus-circle-outlined.svg';

const Sidebar = ({ type }) => {
  const renderRecipeList = () => {
    return data.map((item) => {
      return <p>item.title</p>;
    });
  };

  return (
    <aside>
      <div>
        <h1>{type}</h1>
        <PlusCircle />
      </div>
      {/*renderRecipeList()*/}
    </aside>
  );
};

export default Sidebar;
