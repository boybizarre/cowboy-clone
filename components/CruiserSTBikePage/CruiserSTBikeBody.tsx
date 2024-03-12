import CruiserSTBikeSection from './CruiserSTBikeSection';
import BikeRadioSelect from '../General/BikeRadioSelect';
import CruiserSTPowerSection from './CruiserSTPowerSection';
import CruiserSTStyleSection from './CruiserSTStyleSection';
import BikeModelsSection from '../General/BikeModelsSection'
import CruiserSTStreetSection from './CruiserSTStreetSection'
import Footer from '@/components/Footer';

const CruiserSTBikeBody = () => {
  return (
    <div id='filters' className='bg-[#FDF8F2]'>
      <CruiserSTBikeSection />
      <BikeRadioSelect />
      <CruiserSTPowerSection />
      <CruiserSTStyleSection />
      <BikeModelsSection />
      <CruiserSTStreetSection />
      <Footer />
    </div>
  );
};

export default CruiserSTBikeBody;
