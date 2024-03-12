'use client';

import mobileImage from '../../public/circular--usp.webp';

// components
import BikePowerSection from '../General/BikePowerSection';

const CruiserSTPowerSection = () => {
  const videoLinks = [
    'https://cowboy.com/cdn/shop/t/27/assets/cruiser-st--connected-ride.webm?v=49437331940536224001692383913',
    'https://cowboy.com/cdn/shop/t/27/assets/cruiser-st--assistance.webm?v=120452490851749075231693989931',
    'https://cowboy.com/cdn/shop/t/27/assets/cruiser-st--battery.webm?v=175171553245501265131693989952',
  ];

  return <BikePowerSection id={'item-classic'}  mobileImage={mobileImage} videoLinks={videoLinks} />;
};

export default CruiserSTPowerSection;
