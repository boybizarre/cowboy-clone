import img1 from '../../public/Classic/classic-black-cropped.webp';
import img2 from '@/public/Classic/classic--detail.webp';
import img3 from '@/public/Classic/classic--detail-3.webp';
import img4 from '@/public/Classic/classic--detail-5.webp';

// component
import BikeStyleSection from '../General/BikeStyleSection';

const ClassicStyleSection = () => {
  const data = {
    id: ['item-classic', 'classic-ride'],
    subText:
      'With an integrated cockpit and streamlined handlebars, the Classic gives you a sporty riding position on a sleek step-over frame. Mount up and lean in to move straight through.',
    labels: ['Comfort Saddle', 'Streamlined cockpit and handlebars'],
    images: [img1, img2, img3, img4],
    altText: 'Classic-Bike',
  };

  return <BikeStyleSection data={data} />;
};

export default ClassicStyleSection;
