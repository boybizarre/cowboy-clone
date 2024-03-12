import img1 from '../../public/Cruiser/cruiser-sand-cropped.webp';
import img2 from '@/public/Cruiser/cruiser--detail-4.webp';
import img3 from '@/public/Cruiser/cruiser--detail-3.webp';
import img4 from '@/public/Cruiser/cruiser--detail-5.webp';

// components
import BikeStyleSection from '../General/BikeStyleSection';

const CruiserStyleSection = () => {
  const data = {
    id: ['page-cruiser', ''],
    subText:
      "With a raised cockpit and curved handlebars, the Cruiser gives you a comfortable riding position on a sleek step-over frame. Settle into the wider saddle and you'll ride on and on.",
    labels: ['Comfort Saddle', 'Raised cockpit, curved handlebars'],
    images: [img1, img2, img3, img4],
    altText: 'Cruiser-Bike',
  };

  return <BikeStyleSection data={data} />;
};

export default CruiserStyleSection;
