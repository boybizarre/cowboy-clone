
import Image from 'next/image';
import Link from 'next/link';

// images and icons
import testRideHero from '../../public/test-ride--hero.webp';
import { ArrowDownIcon } from '@heroicons/react/20/solid';

const TestRideHero = () => {
  return (
    <div>
      <div className='absolute top-0 z-0 object-cover w-full h-screen'>
        <Image
          className='w-full h-[104vh] object-cover'
          src={testRideHero}
          alt='Test Ride'
        />
      </div>

      <div className='custom_powerText z-20'>
        <div
          className='flex flex-col '
        >
          <p data-aos='fade-up'
          data-aos-duration='600'
          data-aos-offset='120' className='text-white font-sand font-[500] pb-4 text-[20px] sm:text-[22px]'>
            Cowboy test rides
          </p>
          <h1 data-aos='fade-up'
          data-aos-duration='600'
          data-aos-offset='200' className='tracking-tight font-rale main-text text-[40px] font-[500] text-white sm:text-[55px] lg:text-[100px] '>
            We&apos;ll come to you
          </h1>
          <div>
            <Link
              href='#preview'
              className='bg-white group hover:bg-[#000] h-12 w-12 mt-40  flex items-center justify-center text-center rounded-full mx-auto sm:mt-24'
            >
              <ArrowDownIcon className='custom_animation mx-auto w-5 h-12 group-hover:text-white text-[#1D1D1D]' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestRideHero