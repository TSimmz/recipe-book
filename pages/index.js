import Layout from '../components/Layout';
import HeroGraphic from '../assets/illustrations/Main-graphic.svg';

export default function Home() {
  return (
    <Layout>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col absolute left-1/4 text-right'>
          <h1 className='text-6xl font-bold'>Recipe Book</h1>
          <h2 className='text-4xl'>A place to keep all your recipes!</h2>
        </div>
        <HeroGraphic />
      </div>
    </Layout>
  );
}
