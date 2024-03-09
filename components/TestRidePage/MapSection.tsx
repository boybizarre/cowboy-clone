'use client';

import { AiOutlineArrowRight } from 'react-icons/ai';

const MapSection = () => {
  const locations = [
    'Belgium',
    'France',
    'Denmark',
    'London South',
    'London West',
    'UAE',
  ];

  return (
    <div className='relative'>
      <iframe
        className='h-[105vh] w-full z-20 relative'
        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15854.898338857762!2d3.3691251500000003!3d6.556411099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1696237913979!5m2!1sen!2sng'
        width='600'
        height='450'
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
      <div className='custom_mapText flex flex-col rounded-md z-50 bg-black h-auto lg:w-[30%]'>
        <div className='px-4 pt-8 lg:px-8'>
          <p className='text-[#9A9A9A] font-sand text-[18px]'>
            Book a free test ride
          </p>
          <h1 className='text-[30px] font-sand py-3 font-[500] text-white'>
            Where are you ?
          </h1>

          <div className='mt-2.5 mb-8'>
            <input
              type='text'
              placeholder='Type an address or city'
              className='block w-full border-0 px-3.5 py-3 rounded-md font-sand text-[18px] text-gray-900 shadow-sm sm:text-sm sm:leading-6 outline-none placeholder:text-[18px] placeholder:font-sand'
            />
          </div>
        </div>

        <div className='bg-white py-8 rounded-b-md custom_webBike'>
          <ul className='px-8 flex flex-col gap-2'>
            {locations.map((location, index) => (
              <li key={index} className='flex justify-between items-center'>
                <p className='font-sand font-[500] text-[#1D1D1D] text-[18px]'>
                  {location}
                </p>
                <AiOutlineArrowRight className='w-5 h-5' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
