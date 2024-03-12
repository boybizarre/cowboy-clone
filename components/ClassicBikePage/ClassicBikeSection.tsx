import Link from 'next/link';

import { ChevronRightIcon } from '@heroicons/react/20/solid';

const ClassicBikeSection = () => {
  return (
    <section>
      <div className='custom_maxWidth pt-12 xl:pt-20'>
        <div className='w-full text-left mx-auto xl:text-center xl:w-[80%]'>
          <h1 className='pb-8 custom_subText'>
            Meet the Classic and you&apos;ve found one agile ride with an
            incredibly swift side. Gain serious power on an electric bike
            that&apos;s built around you.
          </h1>

          <Link
            href='/test-ride'
            className='bg-[#1D1D1D] custom_webBike font-sand text-[18px] hover:opacity-90 font-[500] px-8 py-3 text-white rounded-full'
          >
            Book a free ride
          </Link>

          <div className='custom_mobileBike'>
            <div className='flex flex-row gap-3'>
              <Link href='/e-bike/classic' className='custom_bgBlackBtn w-fit'>
                Explore
              </Link>
              <Link
                href='/test-ride'
                className='custom_flexCenter gap-1 font-sand font-[500]'
              >
                Book a test ride <ChevronRightIcon className='w-6 h-6 mt-0.5' />{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassicBikeSection;
