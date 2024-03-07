import TabsSection from './TabsSection';
import CommuteSection from './CommuteSection';
import SparepartsSection from './SparepartsSection';
import SafetySection from './SafetySection';
import MaintenanceSection from './MaintenanceSection';
import ApparelSection from './ApparelSection';
import Footer from '../../components/Footer';

const CategorySection = () => {
  return (
    <div className='relative top-[91vh]  z-40'>
      <TabsSection />
      <CommuteSection />
      <SparepartsSection />
      <SafetySection />
      <MaintenanceSection />
      <ApparelSection />
      <Footer />
    </div>
  );
};

export default CategorySection;
