import BookRideSection from './BookRideSection';
import MapSection from './MapSection';
import ConnectSection from './ConnectSection';
import Footer from '../Footer';

const TestRideBody = () => {
  return (
    <div className='relative top-[91vh] bg-[#fafafa]  z-40'>
      <BookRideSection />
      <MapSection />
      <ConnectSection />
      <Footer />
    </div>
  );
};

export default TestRideBody;
