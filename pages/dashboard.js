import Layout from '../components/Layout';
import RecipeNav from '../components/RecipeNav';
import RecipePage from '../components/RecipePage';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <RecipeNav />
      <Sidebar type='Books' />
      <Sidebar type='Recipes' />
      <RecipePage recipe={{ title: 'Title', cookTime: 'Cook-Time' }} />
    </Layout>
  );
};

export default Dashboard;
