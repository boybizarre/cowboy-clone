import Image from 'next/image';
import Link from 'next/link';

// images
import img from '../../public/Cruiser-st/cruiser-st-lavender_hero.webp';

// icons
import { ArrowDownIcon } from '@heroicons/react/20/solid';

const CruiserSTBikeHero = () => {
  return (
    <div className='relative overflow-hidden pt-8 h-[100vh] xl:h-[110vh]'>
      <div className='flex flex-col justify-center items-center gap-14'>
        <div>
          <p
            data-aos='fade-up'
            data-aos-duration='600'
            data-aos-offset='200'
            className='text-black font-sand font-[500] text-[21px] text-center'
          >
            Cruiser ST
          </p>
          <h1
            data-aos='fade-up'
            data-aos-duration='600'
            data-aos-offset='220'
            className='custom_heroMainText'
          >
            Your claim to frame
          </h1>
          <p
            data-aos='fade-up'
            data-aos-duration='600'
            data-aos-offset='220'
            className='custom_mobileBike text-center pt-2 text-[#747474] font-sand'
          >
            Delivered from 10 days
          </p>
        </div>

        <div
          data-aos='fade-up'
          data-aos-duration='600'
          data-aos-offset='220'
          className='w-[130vw] xl:w-[56.5vw]'
        >
          <Image
            className='w-full xl:w-[130vw] object-cover'
            src={img}
            alt='Classic E-bike'
          />
        </div>

        <div className='absolute z-40 custom_webBike bottom-[8%] md:bottom-[28%]'>
          <Link
            href='#filters'
            className='bg-black group hover:bg-white  h-12 w-12 mt-24  flex items-center justify-center text-center rounded-full mx-auto'
          >
            <ArrowDownIcon className='custom_animation mx-auto w-5 h-12 group-hover:text-[#1D1D1D] text-white' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CruiserSTBikeHero;
