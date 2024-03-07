import Image from 'next/image';
import Link from 'next/link';

// images
import power from '../../public/adaptive-power.jpg';
import img from '../../public/adaptive-power--hero_portrait.jpg';

// icons
import { ArrowDownIcon } from '@heroicons/react/20/solid';

const AdaptiveHero = () => {
  return (
    <div>
      <div className='custom_adaptiveBikeWeb absolute top-0 z-0 object-cover w-full h-screen'>
        <Image
          className='h-[180vh] object-cover w-full'
          src={power}
          alt='Cowboy Adaptive Power'
        />
      </div>

      <div className='custom_adaptiveBikeMobile absolute top-0 z-0 object-cover w-full h-screen'>
        <Image
          className='h-full object-cover'
          src={img}
          alt='Cowboy Adaptive Power'
        />
      </div>

      <div className='custom_powerText z-20'>
        <div
          data-aos='fade-up'
          data-aos-duration='600'
          data-aos-offset='200'
          data-aos-easing='ease-in'
          className='flex flex-col'
        >
          <p className='text-white font-sand font-[500] pb-2 text-[18px] sm:text-[21px] sm:pb-4 lg:pb-0'>
            Cowboy AdaptivePower™
          </p>
          <h1 className='custom_mainText tracking-tight font-rale font-[600] text-[55px] sm:text-[80px] lg:text-[100px] text-white'>
            It&apos;s a feeling
          </h1>
          <div>
            <Link
              href='#provider'
              className='bg-white group hover:bg-black  h-12 w-12 mt-48 md:mt-40  flex items-center justify-center text-center rounded-full mx-auto'
            >
              <ArrowDownIcon className='animate-customAnimation mx-auto w-5 h-12 group-hover:text-white text-[#1d1d1d]' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdaptiveHero;
