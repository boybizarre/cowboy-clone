import BikeStreetSection from '../General/BikeStreetSection';

import img1 from '../../public/Cruiser/standard_resolution1.jpg';
import img2 from '../../public/Classic/standard_resolution4.jpg';
import img3 from '../../public/Classic/standard_resolution3.jpg';
import img4 from '../../public/Classic/standard_resolution2.jpg';
import img5 from '../../public/Classic/standard_resolution1.jpg';

const CruiserStreetSection = () => {
  const data = {
    bikeName: 'Cruiser',
    images: [img1, img2, img3, img4, img5],
  };

  return <BikeStreetSection data={data} />;
};

export default CruiserStreetSection;
