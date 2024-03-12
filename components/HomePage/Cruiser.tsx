'use client';

import Image from 'next/image';
import Link from 'next/link';
import cruiser from '@/public/cruiser-sand.webp';
import cruiserFull from '@/public/cruiser-sand2.webp';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const Cruiser = () => {
  return (
    <section id='cruiser'>
      <div className='custom_flexContainer pt-12 relative overflow-hidden xl:pt-20 xl:max-w-7xl xl:mx-auto xl:px-4'>
        <div
          className='w-full pt-2 flex items-center justify-center xl:w-8/12 xl:pt-20'
          data-aos='zoom-in-up'
          data-aos-duration='1500'
          data-aos-offet='100'
        >
          <Image
            src={cruiser}
            className='custom_webBike w-[60%]'
            alt='Cruiser'
          />
        </div>

        <div className='custom_homeSection'>
          <div className='flex flex-col gap-6 xl:gap-8'>
            <p
              className='text-[22px] font-[500] font-sand'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-offset='100'
            >
              Cruiser
            </p>
            <h1
              className='custom_homeMainText font-rale'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-offset='100'
            >
              Rise up to ride in comfort
            </h1>

            <div
              className='custom_mobileBike scale-125'
              data-aos='zoom-in-up'
              data-aos-duration='1500'
              data-aos-offset='150'
            >
              <Image className='w-[120vw]' src={cruiserFull} alt='Cruiser' />
            </div>

            <div
              className='custom_homeButton'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-offset='120'
            >
              <Link href='/e-bike/cruiser' className='custom_bgBlackBtn w-fit'>
                Explore
              </Link>
              <Link
                href='/test-ride'
                className='custom_flexCenter gap-1 font-sand font-[500] xl:gap-2'
              >
                Book a test ride{' '}
                <ChevronRightIcon className='w-6 h-6 xl:mt-1' />
              </Link>
            </div>
          </div>

          <div
            className='custom_homeBottomText'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-offset='150'
          >
            <div>
              <p className='custom_eyebrow'>0% Finance</p>
              <strong className='custom_h3'>From €2.490</strong>
            </div>

            <div className='relative'>
              <div className='custom_line'>
                <p className='custom_eyebrow'>Removable battery</p>
                <strong className='custom_h3'>Range predicator</strong>
              </div>
            </div>

            <div className='relative'>
              <div className='custom_line'>
                <p className='custom_eyebrow'>Anti-theft</p>
                <strong className='custom_h3'>GPS tracking</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cruiser;
