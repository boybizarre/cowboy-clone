import Image from 'next/image';
import Link from 'next/link';

// images
import cruiserBikeWeb from '../../public/Classic/classic-black.webp';
import cruiserBikeMobile from '@/public/Cruiser/cruiser-sand_hero-cropped.webp';

// icons
import { ArrowDownIcon } from '@heroicons/react/20/solid';

const CruiserBikeHero = () => {
  return (
    <div className='relative overflow-hidden pt-8 xl:h-[95vh]'>
      <div className='flex flex-col justify-center items-center gap-14'>
        <div>
          <p
            data-aos='fade-up'
            data-aos-duration='600'
            data-aos-offset='200'
            className='text-black font-sand font-[500] text-[21px] text-center'
          >
            Cruiser
          </p>
          <h1
            data-aos='fade-up'
            data-aos-duration='600'
            data-aos-offset='220'
            className='custom_heroMainText'
          >
            Easy climb, easy go
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
          className='w-[130vw] custom_adaptiveBikeWeb'
        >
          <Image
            className='w-full object-cover'
            src={cruiserBikeWeb}
            alt='Classic E-bike'
          />
        </div>

        <div
          data-aos='fade-up'
          data-aos-duration='600'
          data-aos-offset='200'
          className='custom_adaptiveBikeMobile'
        >
          <Image src={cruiserBikeMobile} alt='Classic E-bike' />
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

export default CruiserBikeHero;
