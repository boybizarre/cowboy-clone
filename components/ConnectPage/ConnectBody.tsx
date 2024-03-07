import React from 'react';
import Potential from './Potential';
import TheftInsurance from './TheftInsurance';
import ShareRide from './ShareRide';
import Fitness from './Fitness';
import Footer from '../Footer';

const ConnectBody = () => {
  return (
    <div className='relative top-[88vh] sm:top-[84vh] bg-[#FDF8F2] z-20 '>
      <Potential />
      <TheftInsurance />
      <ShareRide />
      <Fitness />
      <Footer />
    </div>
  );
};

export default ConnectBody;
