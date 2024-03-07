import Image from 'next/image';

// images
import battery from '@/public/accessories/battery-side_512x@2x.webp';
import belt from '@/public/accessories/Belt.webp';
import charger from '@/public/accessories/Battery-charger.webp';
import wheel from '@/public/accessories/FullrearWheel.webp';
import pedal from '@/public/accessories/Pedalset.webp';
import wheel2 from '@/public/accessories/FullRearWheel2.webp';

// icons
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const SparepartsSection = () => {

   const sparePartData = [
    {
      image: battery,
      itemName: 'Cowboy Battery',
      price: 490,
    },
    {
      image: belt,
      itemName: 'Drive belt - C1,C2',
      price: 30,
    },
    {
      image: charger,
      itemName: 'Standard battery charger',
      price: 119,
    },
    {
      image: wheel,
      itemName: 'Full rear wheel - C2',
      price: 459,
    },
    {
      image: pedal,
      itemName: 'Pedal set - C1,C2,C3',
      price: 13,
    },
    {
      image: wheel2,
      itemName: 'Full rear wheel - Classic, Cruiser ST',
      price: 310,
    },
   ];
  
  return (
    <div id='spareparts' className='max-w-7xl px-4 mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 lg:gap-x-10 lg:gap-y-10'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <p className='font-sand text-[19px] font-[500]'>Spare parts</p>
          <h1 className='text-[45px] font-rale leading-[2.9rem] pb-4 font-[500] text-center'>
            Source cowboy specified extras
          </h1>
          <ArrowRightIcon className='w-8 h-8' />
        </div>

        {sparePartData.map((item, index) => (
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

export default SparepartsSection;
