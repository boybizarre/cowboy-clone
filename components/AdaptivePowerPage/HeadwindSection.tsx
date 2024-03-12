import Image from 'next/image';
import Link from 'next/link';

// images
import wind from '@/public/adaptive-power-wind.webp';
import eco from '@/public/adaptive-power-wind-2.webp';

// icons
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const HeadwindSection = () => {
  return (
    <div>
      <div className='mt-12 lg:mt-16'>
        <section className='pt-6 md:pt-12'>
          <div className='relative'>
            <Image
              className='object-cover h-screen xl:h-auto'
              src={wind}
              alt='Adaptive-power-wind'
            />

            <div className='absolute top-4 left-4 xl:top-20 xl:left-[2.8rem]'>
              <div data-aos-easing='ease-in' className='custom_paceText'>
                <span
                  data-aos='fade-up'
                  data-aos-duration='600'
                  data-aos-offset='200'
                >
                  Feel the rush.
                </span>
                <span
                  data-aos='fade-up'
                  data-aos-duration='600'
                  data-aos-offset='280'
                  className='-mt-2 xl:mt-0'
                >
                  <i>Even</i> in the wind.{' '}
                </span>
              </div>
            </div>

            <div className='custom_paceSubText w-auto xl:w-1/3'>
              <div
                className='flex flex-col gap-2 md:gap-5'
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-offset='200'
                data-aos-easing='ease-in'
              >
                <p className='uppercase text-white font-sand text-[18px]'>
                  Headwind Detected
                </p>
                <div className='flex gap-3 text-white'>
                  <p className='font-sand'>2</p>
                  <h2 className='font-rale font-[500] text-[30px] leading-10 xl:text-[45px] xl:leading-[50px]'>
                    Break free from the current
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='custom_maxWidth'>
          <div className='w-full py-12 xl:w-1/2 xl:py-24'>
            <h3 className='font-sand text-white font-[500] text-[25px] sm:text-[30px]'>
              When you catch a headwind, the bike has already sensed the
              wind&apos;s strength to give you that extra might to cut right
              through it.
            </h3>
          </div>

          <div className='flex flex-col gap-5 border-b xl:flex-row-reverse xl:border-0'>
            {/* bike video */}
            <div className='w-full xl:w-2/3'>
              <video
                className='object-cover h-full w-full'
                controls={false}
                autoPlay
                loop
                muted
                disablePictureInPicture
              >
                <source
                  src='https://cowboy.com/cdn/shop/t/28/assets/classic--adaptive-power-wind.h264.mp4?v=95345725506026967721689508580'
                  type='video/mp4'
                />
              </video>
            </div>

            <div className='w-full xl:w-1/3'>
              <Image
                className='w-full object-cover rounded-md custom_webOnly'
                alt='Adaptive-power-wind'
                src={eco}
              />

              <div className='flex flex-col justify-start gap-2 xl:gap-4 xl:px-6'>
                <h1 className='text-[30px] font-rale text-white lg:pt-12 '>
                  Force nothing
                </h1>
                <p className='text-[#9A9A9A] font-sand text-[20px]'>
                  With all this extra power talk,battery efficiency is our walk
                  . Switch to power saving as you ride for more efficiency when
                  you need it .
                </p>
                <p className='flex items-center gap-1 pb-12 py-3 text-white font-sand text-[20px]'>
                  Learn more <ChevronRightIcon className='h-6 w-6 mt-0.5' />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='custom_maxWidth'>
          <div
            data-aos='fade-up'
            data-aos-duration='800'
            data-aos-offset='200'
            className='w-full py-12 xl:w-1/2 xl:py-24'
          >
            <h3 className='custom_circularSubText'>
              AdaptivePower is inside every Cowboy. The bike&apos;s motor adjusts in
              real time for a new prowess on the streets
            </h3>
            <div className='flex text-white opacity-75 items-center pt-6 gap-2 font-sand text-[19px]'>
              <Link className='hover:underline' href='/e-bike/classic  '>
                Classic
              </Link>
              <ChevronRightIcon className='w-6 h-6' />
              <Link className='hover:underline' href='/e-bike/cruiser  '>
                Cruiser
              </Link>
              <ChevronRightIcon className='w-6 h-6' />
              <Link className='hover:underline' href='/e-bike/cruiser-st  '>
                Cruiser ST
              </Link>
            </div>
          </div>

          <div className='relative'>
            <video
              controls={false}
              autoPlay
              loop
              muted
              disablePictureInPicture
              className='object-cover w-full h-screen md:h-full'
            >
              <source
                src='https://cowboy.com/cdn/shop/t/28/assets/classic--assistance.webm?v=67356282726875004841689508614'
                type='video/mp4'
              />
            </video>

            <aside
              data-aos='fade-up'
              data-aos-duration='600'
              data-aos-offset='200'
              className='absolute w-full custom_webOnly bottom-4 left-4 md:w-1/4 xl:bottom-28 xl:left-14'
            >
              <div className='custom_boxBorder p-6 flex rounded-md flex-col gap-1 items-center'>
                <h3 className='font-sand font-[500] text-[18px] text-white'>
                  Motor power active
                </h3>
                <p className='text-white opacity-75 text-[14px] font-sand'>
                  64% of last ride
                </p>
              </div>
            </aside>

            <aside
              data-aos='fade-up'
              data-aos-duration='600'
              data-aos-offset='200'
              className='absolute w-ful md:w-1/3 pl-2 bottom-4 right-0 xl:bottom-28 xl:right-12'
            >
              <h2 className='font-rale font-[400] text-white leading-10 text-[27px] sm:text-[35px] md:font-[500] md:leading-[2.9rem] xl:text-[40px]  '>
                Stay in the flow, never slowed
              </h2>
              <Link
                className='flex gap-1 items-center pt-1 text-white font-sand text-[18px] font-[300] sm:font-[500] xl:pt-4'
                href='/connect'
              >
                How it works <ChevronRightIcon className='w-6 h-6 mt-1 xl:mt-0.5' />{' '}
              </Link>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeadwindSection;
