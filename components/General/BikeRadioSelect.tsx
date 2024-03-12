import { useState } from 'react';
import Image from 'next/image';

import { RadioGroup } from '@headlessui/react';

// images
import classicblack from '@/public/Classic/classic-black.webp';
import classiclavender from '@/public/Classic/classic-lavender.webp';
import classicfig from '@/public/Classic/classic-fig.webp';
import classicsand from '@/public/Classic/classic-sand.webp';
import classicclay from '@/public/Classic/classic-clay.webp';
import shadow from '@/public/Classic/shadow.webp';

const bikeData = [
  {
    img: classicblack,
    alt: 'classic-black',
    color: 'bg-[#000]',
    selectedClass: 'ring-gray-400',
  },
  {
    img: classiclavender,
    alt: 'classic-lavender',
    color: 'bg-[#e6e1f9]',
    selectedClass: 'ring-gray-400',
  },
  {
    img: classicsand,
    alt: 'classic-sand',
    color: 'bg-[#e8dec8]',
    selectedClass: 'ring-gray-400',
  },
  {
    img: classicfig,
    alt: 'classic-fig',
    color: 'bg-[#e8c4b8]',
    selectedClass: 'ring-gray-400',
  },
  {
    img: classicclay,
    alt: 'classic-clay',
    color: 'bg-[#c07e72]',
    selectedClass: 'ring-gray-400',
  },
];

const BikeRadioSelect = () => {
  const [currentImage, setCurrentImage] = useState(bikeData[0]);
  const [selectedColor, setSelectedColor] = useState(bikeData[0]);

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <section>
      <div className='pt-20 flex gap-y-8 flex-col xl:flex-row-reverse items-center xl:justify-between xl:max-w-7xl xl:mx-auto xl:px-4 xl:pt-14'>
        <div className='w-full relative overflow-hidden flex items-center justify-center xl:w-11/12'>
          {/* bike image */}
          <Image
            className='h-[40vh] object-cover sm:h-auto xl:scale-[0.75]'
            src={currentImage.img}
            alt={currentImage.alt}
          />

          {/* shadow beneath bike image */}
          <Image
            className='absolute custom_webBike bottom-0 scale-100 xl:bottom-8 xl:scale-[0.76]'
            src={shadow}
            alt='Bike shadow'
          />
        </div>

        <RadioGroup
          value={selectedColor}
          onChange={setSelectedColor}
          className='mt-4 pb-16 flex justify-center w-full xl:justify-start xl:w-1/12 xl:pb-0'
        >
          <div className='bg-white flex flex-row gap-3 w-fit p-3 rounded-full xl:flex-col'>
            {bikeData.map((item, index) => (
              <div key={index}>
                <RadioGroup.Option
                  onClick={() => setCurrentImage(item)}
                  value={item}
                  className={({ active, checked }) =>
                    classNames(
                      item.selectedClass,
                      active && checked ? 'ring ring-offset-1' : '',
                      !active && checked ? 'ring ring-offset-1' : '',
                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                    )
                  }
                >
                  <RadioGroup.Label as='span' className='sr-only'>
                    {item.alt}
                  </RadioGroup.Label>
                  <span
                    aria-hidden='true'
                    className={classNames(
                      item.color,
                      'h-8 w-8 rounded-full border border-black border-opacity-10'
                    )}
                  />
                </RadioGroup.Option>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>
    </section>
  );
};

export default BikeRadioSelect;
