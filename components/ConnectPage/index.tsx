import Navbar from '../Navbar';
import ConnectHero from './ConnectHero';
import ConnectBody from './ConnectBody'
// import 'aos/dist/aos.css';

const Connect = () => {

  return (
    <main className=''>
      <Navbar inverted />
      <ConnectHero />
      <ConnectBody />
    </main>
  );
};

export default Connect;
