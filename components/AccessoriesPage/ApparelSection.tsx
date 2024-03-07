import Image from 'next/image';

// images
import cap from '@/public/accessories/Cowboy_cap.webp';
import tshirt from '@/public/accessories/Front_.webp';
import backpack from '@/public/accessories/BERNT-Black.webp';
import coco from '@/public/accessories/CocoCapitan_Product.webp';
import lo from '@/public/accessories/lo-black_512x@2x.webp';

// icons
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const ApparelSection = () => {
  const commuteData = [
    {
      image: cap,
      itemName: 'Cowboy cap',
      price: 20,
    },
    {
      image: tshirt,
      itemName: 'Cowboy t-shirt',
      price: 30,
    },
    {
      image: backpack,
      itemName: 'Sandqvist Bernt Backpack',
      price: 156,
    },
    {
      image: coco,
      itemName: 'Cowboy x Coco Capitán T-Shirt',
      price: 45,
    },
    {
      image: lo,
      itemName: 'Sandqvist Lo Bumbag',
      price: 76,
    },
  ];
  
  return (
    <div id='apparel' className='max-w-7xl px-4 mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 lg:gap-x-10 lg:gap-y-10'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <p className='font-sand text-[19px] font-[500]'>Apparel</p>
          <h1 className='text-[45px] font-rale leading-[2.9rem] pb-4 font-[500] text-center'>
            Get the Cowboy look
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
}

export default ApparelSection;
