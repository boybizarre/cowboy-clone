import cruiserST from '@/public/cruiser-st-lavender.webp';
import cruiserSTFull from '@/public/cruiser-st-lavender1.webp';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

const CruiserSt = () => {
  return (
    <section id='cruiser-st'>
      <div className='custom_flexContainerReverse pt-12 relative overflow-hidden xl:pt-24 xl:max-w-7xl xl:mx-auto xl:px-4'>
        <div
          className='w-full pt-4 flex items-center justify-end xl:w-7/12 xl:pt-16'
          data-aos='zoom-in-left'
          data-aos-duration='1500'
          data-aos-offet='100'
        >
          <Image
            src={cruiserST}
            className='custom_webBike w-[80%]'
            alt='Cruiser-ST'
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
              Cruiser ST
            </p>
            <h1
              className='custom_homeMainText font-rale'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-offset='100'
            >
              Step through to a new colorway
            </h1>

            <div
              className='custom_mobileBike scale-125'
              data-aos='zoom-in-up'
              data-aos-duration='1500'
              data-aos-offset='100'
            >
              <Image className='' src={cruiserSTFull} alt='Cruiser-ST' />
            </div>

            <div
              className='custom_homeButton'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-offset='120'
            >
              <Link
                href='/e-bike/cruiser-st'
                className='custom_bgBlackBtn w-fit'
              >
                Explore
              </Link>
              <Link
                href='/test-ride'
                className='custom_flex_center gap-1 font-sand font-[500] xl:gap-2'
              >
                Book a test ride <ChevronRightIcon className='w-6 h-6 mt-1' />
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

export default CruiserSt;
