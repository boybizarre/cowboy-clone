import img1 from '../../public/Classic/classic-black-cropped.webp';
import img2 from '@/public/Classic/classic--detail.webp';
import img3 from '@/public/Classic/classic--detail-3.webp';
import img4 from '@/public/Classic/classic--detail-5.webp';

// components
import BikeStyleSection from '../General/BikeStyleSection';

const CruiserSTStyleSection = () => {
  const data = {
    id: ['item-classic', 'classic-ride'],
    subText:
      "With a raised cockpit and curved handlebars, the Cruiser ST gives you an upright riding position. Step in from either side for a ride that's always easy to access.",
    labels: ['Comfort Saddle', 'Streamlined cockpit and handlebars'],
    images: [img1, img2, img3, img4],
    altText: 'CruiserST-Bike',
  };

  return <BikeStyleSection data={data} />;
};

export default CruiserSTStyleSection;
