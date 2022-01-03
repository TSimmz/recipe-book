import Layout from '../components/Layout';
import RecipeNav from '../components/RecipeNav';
import RecipePage from '../components/RecipePage';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <Layout className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Dashboard</h1>
      <RecipeNav />
      {/*<Sidebar />*/}
      {/*<Sidebar />*/}
      {/*<RecipePage recipe={{ title: 'Title', cookTime: 'Cook-Time' }} />*/}
    </Layout>
  );
};

export default Dashboard;
