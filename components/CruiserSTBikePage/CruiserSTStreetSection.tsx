import BikeStreetSection from '../General/BikeStreetSection';

import img1 from '../../public/Cruiser-st/standard_resolution1.jpg';
import img2 from '../../public/Cruiser-st/standard_resolution5.jpg';
import img3 from '../../public/Cruiser-st/standard_resolution2.jpg';
import img4 from '../../public/Cruiser-st/standard_resolution4.jpg';
import img5 from '../../public/Cruiser-st/standard_resolution3.jpg';

const CruiserSTStreetSection = () => {
  const data = {
    bikeName: 'Cruiser ST',
    images: [img1, img2, img3, img4, img5],
  };

  return <BikeStreetSection data={data} />;
};

export default CruiserSTStreetSection;
