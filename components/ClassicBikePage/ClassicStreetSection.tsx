import img1 from '../../public/Classic/standard_resolution5.jpg';
import img2 from '../../public/Classic/standard_resolution4.jpg';
import img3 from '../../public/Classic/standard_resolution3.jpg';
import img4 from '../../public/Classic/standard_resolution2.jpg';
import img5 from '../../public/Classic/standard_resolution1.jpg';

import BikeStreetSection from '../General/BikeStreetSection';

const ClassicStreetSection = () => {
  const data = {
    bikeName: 'Classic',
    images: [img1, img2, img3, img4, img5],
  };

  return <BikeStreetSection data={data} />;
};

export default ClassicStreetSection;
