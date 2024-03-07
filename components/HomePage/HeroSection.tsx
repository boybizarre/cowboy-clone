'use client';

import { ArrowDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div>
      <div>
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controls={false}
          className='object-cover absolute top-0 z-0 w-[100%] h-[105vh]'
        >
          <source
            src='https://cowboy.com/cdn/shop/t/27/assets/cruiser-launch--9s-16_9_no_titles.h264.mp4?v=35615708937683684951690478180'
            type='video/mp4'
          />
        </video>
      </div>

      <div className='custom_heroText z-20'>
        <div
          className='flex flex-col gap-[2.5rem] sm:gap-[3rem]'
          data-aos='fade-up'
          data-aos-duration='600'
          data-aos-offset='200'
        >
          <h3
            className='text-white text-[20px] font-[500] font-rale'
            data-aos='fade-up'
            data-aos-duration='600'
            data-aos-offset='200'
          >
            A new ride
          </h3>
          <div className='custom_mainText text-[55px] lg:text-[100px] text-white  flex flex-col gap-y-[2rem] font-[500] font-rale lg:gap-y-[4.57rem]'>
            <h1>Introducing</h1>
            <h1>Cruiser</h1>
          </div>

          <div className='bg-[#F2EBE3] px-6 font-sand font-[500] py-2.5 mt-6 hover:opacity-80 rounded-full text-[18px] mx-auto'>
            <Link href='/e-bike/cruiser'>Discover Cruiser</Link>
          </div>
          <div className='group bg-[#1D1D1D] hover:bg-white h-12 w-12 mt-4 flex items-center justify-center text-center rounded-full mx-auto'>
            <Link href='#cruiser'>
              <ArrowDownIcon className='custom_animation mx-auto w-5 h-12 text-white group-hover:text-black' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
