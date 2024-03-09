import ProviderSection from './ProviderSection';
import Options from './Options'
import FaqSection from './FaqSection'
import Footer from '../Footer';

const LeaseBody = () => {
  return (
    <div className='bg-[#F6F6F6]'>
      <div className='relative top-[100vh] '>
        <ProviderSection />
        <Options/>   
        <FaqSection/>
        <Footer />
      </div>
    </div>
  );
};

export default LeaseBody;
