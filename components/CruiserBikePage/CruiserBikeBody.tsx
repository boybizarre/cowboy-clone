import CruiserBikeSection from './CruiserBikeSection';
import BikeRadioSelect from '../General/BikeRadioSelect';
import CruiserPowerSection from './CruiserPowerSection';
import CruiserStyleSection from './CruiserStyleSection';
import BikeModelsSection from '../General/BikeModelsSection';
import CruiserStreetSection from './CruiserStreetSection';
import Footer from '@/components/Footer';

const BodySection = () => {
  return (
    <div id='filters' className='bg-[#FDF8F2]'>
      <CruiserBikeSection />
      <BikeRadioSelect />
      <CruiserPowerSection />
      <CruiserStyleSection />
      <BikeModelsSection />
      <CruiserStreetSection />
      <Footer />
    </div>
  );
};

export default BodySection;
