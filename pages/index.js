import Layout from '../components/Layout';
import HeroGraphic from '../assets/illustrations/Main-graphic.svg';

export default function Home() {
  return (
    <Layout>
      <div className='hero-container'>
        <div className='hero-text'>
          <h1 className='hero-title'>Recipe Book</h1>
          <h2 className='hero-tagline'>A place to keep all your recipes!</h2>
        </div>
        <HeroGraphic />
      </div>
    </Layout>
  );
}
