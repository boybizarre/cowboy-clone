import Image from 'next/image';

// images
import quad from '@/public/accessories/Quad_Lock.webp';
import cmf from '@/public/accessories/cmf.webp';
import adapter from '@/public/accessories/UniAdaptor.webp';
import bmp from '@/public/accessories/bmp.webp';
import brooks from '@/public/accessories/brooks-pannier.webp';
import rack from '@/public/accessories/rear rack.webp';
import light from '@/public/accessories/knog-front-light_512x@2x.webp';
import hamax from '@/public/accessories/hamax-child-seat.webp';

// icons
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const CommuteSection = () => {
  const commuteData = [
    {
      image: quad,
      itemName: 'Quad Lock Phone Case',
      price: 40,
    },
    {
      image: cmf,
      itemName: 'Kickstand',
      price: 29,
    },
    {
      image: adapter,
      itemName: 'Quad Lock Universal Adapter',
      price: 20,
    },
    {
      image: bmp,
      itemName: 'Quad Lock Phone Mount',
      price: 30,
    },
    {
      image: brooks,
      itemName: 'Brooks Scape Pannier',
      price: 125,
    },
    {
      image: rack,
      itemName: 'Rear rack',
      price: 49,
    },
    {
      image: light,
      itemName: 'Knog Plug Front Light',
      price: 30,
    },
    {
      image: hamax,
      itemName: 'Hamax Child Seat',
      price: 149,
    },
  ];

  return (
    <div id='commute' className='py-9 max-w-7xl px-4 mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 lg:gap-x-10 lg:gap-y-10'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <p className='font-sand text-[19px] font-[500]'>Commute</p>
          <h1 className='text-[45px] font-rale leading-[2.9rem] pb-4 font-[500] text-center'>
            Come and go well-equipped
          </h1>
          <ArrowRightIcon className='w-8 h-8' />
        </div>

        {commuteData.map((item, index) => (
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
};

export default CommuteSection;
