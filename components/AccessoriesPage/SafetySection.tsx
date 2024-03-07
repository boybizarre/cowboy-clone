import Image from 'next/image';

// images
import lock from '@/public/accessories/kryptonite-u-lock.webp';
import helmet1 from '@/public/accessories/Helmet.webp';
import helmet2 from '@/public/accessories/helmet2.webp';

// icons
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const SafetySection = () => {

  const safetyData = [
    {
      image: lock,
      itemName: 'Kryptonite U-Lock',
      price: 89,
    },
    {
      image: helmet1,
      itemName: 'POC Omne Air MIPS Helmet',
      price: 160,
    },
    {
      image: helmet2,
      itemName: 'Closca Helmet',
      price: 119,
    },
  ];

  return (
    <div id='safety' className='max-w-7xl px-4 mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 lg:gap-x-10 lg:gap-y-10'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <p className='font-sand text-[19px] font-[500]'>Safety</p>
          <h1 className='text-[45px] font-rale leading-[2.9rem] pb-4 font-[500] text-center'>
            Ride safe and sound
          </h1>
          <ArrowRightIcon className='w-8 h-8' />
        </div>

        {safetyData.map((item, index) => (
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

export default SafetySection;
