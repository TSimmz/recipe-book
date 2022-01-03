import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Recipe Book</h1>
      <h2>A place to keep all your recipes</h2>
      <div className='graphic'>{/* Chef graphic here */}</div>
    </Layout>
  );
}
