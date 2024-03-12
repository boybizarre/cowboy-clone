'use client';

import mobileImage from '@/public/adaptive-power-gravity-2_587x@2x.webp';

// components
import BikePowerSection from '../General/BikePowerSection';

const ClassicPowerSection = () => {
  const videoLinks = [
    'https://cowboy.com/cdn/shop/t/28/assets/classic--connected-ride.webm?v=8147240818941453072169234818',
    'https://cowboy.com/cdn/shop/t/28/assets/classic--assistance.webm?v=67356282726875004841689508614',
    'https://cowboy.com/cdn/shop/t/28/assets/classic--battery.webm?v=25407123785043179731689508622',
  ];

  return <BikePowerSection id={'item-classic'} mobileImage={mobileImage} videoLinks={videoLinks} />;
};

export default ClassicPowerSection;
