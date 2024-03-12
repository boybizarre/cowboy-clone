'use client';

import mobileImage from '../../public/circular--bcorp-large.webp'

// components
import BikePowerSection from '../General/BikePowerSection';

const CruiserPowerSection = () => {

  const videoLinks = [
    'https://cowboy.com/cdn/shop/t/27/assets/cruiser--connected-ride.webm?v=144315724916258534981692383913',
    'https://cowboy.com/cdn/shop/t/27/assets/cruiser--assistance.webm?v=86982297396685394361689166562',
    'https://cowboy.com/cdn/shop/t/27/assets/cruiser--battery.webm?v=165423790606378553131689166575'
  ]

  return (
    <BikePowerSection id={'page-cruiser'} mobileImage={mobileImage} videoLinks={videoLinks} />
  );
};

export default CruiserPowerSection;
