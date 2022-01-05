import Layout from '../components/Layout';
import RecipeNav from '../components/RecipeNav';
import RecipePage from '../components/RecipePage';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <Layout>
      <div className='w-full flex flex-col h-full'>
        <RecipeNav />
        <div className='flex h-full'>
          <Sidebar type='Books' />
          <Sidebar type='Recipes' />
          <RecipePage recipe={{ title: 'Title', cookTime: 'Cook-Time' }} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
