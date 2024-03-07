import Image from 'next/image';
import Link from 'next/link';

// images
import cruiser from '@/public/cruiser-st-lavender1.webp';
import classic from '@/public/classic-black-bike.webp';

// icons
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const PickSection = () => {
  return (
    <div className='bg-[#E5E5E1]'>
      <div className='custom_maxWidth py-12 xl:pt-16'>
        <h1 className='text-[45px] leading-[3.3rem] pb-6 font-rale font-[500] text-[#1D1D1D] sm:text-[70px] lg:text-85px] xl:text-[110px] xl:pb-12 '>
          Pick your side
        </h1>

        <div className='h-auto flex flex-col gap-12 relative xl:gap-0 xl:flex-row'>
          <div className='w-full xl:w-1/2 flex flex-col justify-between gap-2 lg:gap-6 border-r-0 xl:border-r xl:border-r-[rgba(29,29,29,0.1)]'>
            <h2 className='font-sand text-[22px] font-[500] text-[#1D1D1D]'>
              Cruiser ST
            </h2>
            <h3 className='text-[30px] sm:text-[35px] leading-10 pb-2 text-[#1d1d1d] font-rale font-[500] w-full md:text-[50px] lg:leading-[4.2rem] lg:py-6 lg:pb-0 xl:w-[77%] xl:text-[65px]'>
              New colors, fresh spin
            </h3>
            <div className='flex flex-row gap-3 flex-wrap sm:gap-6'>
              <Link
                href='/e-bike/cruiser-st'
                className='custom_bgBlackBtn hover:opacity-95'
              >
                Explore
              </Link>
              <Link
                href='/test-ride'
                className='custom_flex_center font-sand text-[18px] text-[#1d1d1d] font-[500] gap-2'
              >
                Book a test ride <ChevronRightIcon className='w-6 h-6 mt-0' />{' '}
              </Link>
            </div>
            <div className='pt-8 xl:pt-12'>
              <Image
                className=' object-cover w-full xl:w-[90%] h-[100%]'
                src={cruiser}
                alt='Cruiser-ST'
              />
            </div>
          </div>

          <div className='w-full flex flex-col justify-between gap-2 lg:gap-6 translate-x-0 xl:translate-x-10 xl:w-1/2 2xl:translate-x-16'>
            <h2 className='font-sand text-[22px] font-[500] text-[#1d1d1d]'>
              Classic
            </h2>
            <h3 className='text-[30px] sm:text-[35px] leading-10 pb-2 text-[#1D1D1D] font-rale font-[500] md:text-[50px] lg:pb-0 lg:py-6 lg:leading-[4.2rem] xl:w-[77%] xl:text-[65px]'>
              Stealth looks, pure agility
            </h3>
            <div className='flex flex-row gap-3 flex-wrap sm:gap-8'>
              <Link
                href='/e-bike/classic'
                className='custom_bgBlackBtn hover:opacity-95'
              >
                Explore
              </Link>
              <Link
                href='/test-ride'
                className='custom_flex_center font-sand text-[18px] text-[#1d1d1d] font-[500] gap-2'
              >
                Book a test ride <ChevronRightIcon className='w-6 h-6 mt-0' />
              </Link>
            </div>
            <div className='pt-8 xl:pt-12 mt-0 xl:mt-[25px]'>
              <Image
                className=' object-cover w-full xl:w-[90%] h-[100%]'
                src={classic}
                alt='Classic'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickSection;
