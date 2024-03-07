import Image from 'next/image';

// images

import black from '@/public/accessories/Black.webp';
import kit from '@/public/accessories/cleaning-kit.webp';
import hoto from '@/public/accessories/hoto-electric-tire-inflator.webp';

// icons
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const MaintenanceSection = () => {
  const maintenanceData = [
    {
      image: black,
      itemName: 'Cowboy bike touch-up kit',
      price: 30,
    },
    {
      image: kit,
      itemName: 'Muc-Off Bike Cleaning Kit',
      price: 45,
    },
    {
      image: hoto,
      itemName: 'HOTO Electric Tire Inflator',
      price: 72,
    },
  ];

  return (
    <div id='maintenance' className='max-w-7xl px-4 mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 lg:gap-x-10 lg:gap-y-10'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <p className='font-sand text-[19px] font-[500]'>Maintenance</p>
          <h1 className='text-[45px] font-rale leading-[2.9rem] pb-4 font-[500] text-center'>
            Keep your bike in shape
          </h1>
          <ArrowRightIcon className='w-8 h-8' />
        </div>

        {maintenanceData.map((item, index) => (
          <div key={index}>
            <div className='custom_accessories'>
              <Image className='w-[40%]' src={item.image} alt={item.itemName} />
            </div>

            <div className='flex flex-row justify-between py-2'>
              <h3 className='font-sand font-[500] text-[17px]'>
                {item.itemName}
              </h3>
              <p className='font-sand font-[500]'>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className='bg-black my-12 w-full h-[2px] ' />
    </div>
  );
}

export default MaintenanceSection;
