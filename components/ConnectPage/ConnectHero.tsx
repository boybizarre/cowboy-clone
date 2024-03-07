import Image from 'next/image';
import Link from 'next/link';
import connect from '../../public/circular--hero.webp';
import portraitConnect from '@/public/circular--hero_portrait.webp';
import { ArrowDownIcon } from '@heroicons/react/20/solid';

const CoonectHero = () => {
  return (
    <section id='custom_connectIntro'>
      <div className='custom_connectMedia'>
        <div className=''>
          <video
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controls={false}
            className='custom_webBike object-cover absolute top-0 z-0 h-screen w-[100%] sm:w-4/5'
          >
            <source
              src='https://cowboy.com/cdn/shop/t/27/assets/connect--hero.webm?v=135320951610200723611689697287'
              type='video/webm'
            />
          </video>

          <div className='custom_mobileBike object-cover absolute top-0 z-0 h-screen w-[100%]'>
            <Image
              className='h-screen object-cover'
              src={connect}
              alt='Connect'
            />
          </div>

          <div className='custom_portraitBike object-cover absolute top-0 z-0 h-screen w-[100%]'>
            <Image
              className='h-screen object-cover'
              src={portraitConnect}
              alt='Connect'
            />
          </div>
        </div>
      </div>

      <div className='custom_connectText z-20'>
        <h1 className='font-mont font-[500] text-[22px] pb-3 text-[#1d1d1d] sm:pb-0 sm:-mb-1'>
          Cowboy Connect
        </h1>
        <p className='custom_mainText text-[40px] font-[500] text-black font-rale sm:text-[55px] lg:text-[95px]'>
          Unlock your ride
        </p>
        <Link
          href='#filters'
          className='bg-white group hover:bg-black custom_portraitBike h-12 w-12 mt-24  flex items-center justify-center text-center rounded-full mx-auto'
        >
          <ArrowDownIcon className='custom_animation mx-auto w-5 h-12 group-hover:text-white text-[#1d1d1d]' />
        </Link>
      </div>
    </section>
  );
};

export default CoonectHero;
