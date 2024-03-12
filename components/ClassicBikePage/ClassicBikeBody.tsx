import ClassicBikeSection from './ClassicBikeSection';
import BikeRadioSelect from '../General/BikeRadioSelect';
import ClassicPowerSection from './ClassicPowerSection';
import ClassicStyleSection from './ClassicStyleSection';
import BikeModelsSection from '../General/BikeModelsSection';
import ClassicStreetSection from './ClassicStreetSection';
import Footer from '@/components/Footer';

const ClassicBikeBody = () => {
  return (
    <div id='filters' className='bg-[#FDF8F2]'>
      <ClassicBikeSection />
      <BikeRadioSelect />
      <ClassicPowerSection />
      <ClassicStyleSection />
      <BikeModelsSection />
      <ClassicStreetSection />
      <Footer />
    </div>
  );
};

export default ClassicBikeBody;
