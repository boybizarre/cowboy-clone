'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

// images
import incline from '../../public/adaptive-power-incline.webp';
import incline2 from '../../public/adaptive-power-incline-2.webp';
import app from '../../public/adaptive-power-app.webp';

// icons
import {
  ChevronRightIcon,
  PlayIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';

const PaceSection = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div>
      <section>
        <article className='custom_maxWidth pb-10 lg:pb-20'>
          <div className='w-full xl:w-1/2'>
            <h3 className='custom_circularSubText'>
              Here comes your second wind. The Cowboy knows the power you need,
              no matter the hill, headwind or additional weight. Meet the
              elements with a newfound force.
            </h3>
          </div>
        </article>

        <div className='pt-6 md:pt-12'>
          <div className='relative'>
            <Image
              className='h-screen object-cover xl:h-auto'
              src={incline}
              alt='Incline'
            />

            <div className='absolute top-4 left-4 xl:top-20 xl:left-[2.8rem]'>
              <div data-aos-easing='ease-in' className='custom_paceText'>
                <span
                  data-aos='fade-up'
                  data-aos-duration='600'
                  data-aos-offset='200'
                >
                  Feel the pace.
                </span>
                <span
                  data-aos='fade-up'
                  data-aos-duration='600'
                  data-aos-offset='280'
                  className='-mt-2 xl:mt-0'
                >
                  <i>Even</i> uphill.{' '}
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
                  Incline Detected
                </p>
                <div className='flex gap-3 text-white'>
                  <p className='font-sand'>1</p>
                  <h2 className='font-rale font-[500] text-[30px] leading-10 xl:text-[45px] xl:leading-[50px]'>
                    AdaptivePower senses elevation gain
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-12 lg:pt-16 xl:pt-28'>
        <div className='custom_maxWidth'>
          <div className='flex flex-col gap-5 border-b xl:border-0 xl:flex-row'>
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
                  src='https://cowboy.com/cdn/shop/t/28/assets/cruiser-st--adaptive-power-incline.h264.mp4?v=100969412570119089141689510154'
                  type='video/mp4'
                />
              </video>
            </div>

            {/* bikers image */}
            <div className='w-full xl:w-1/3'>
              <Image
                className='w-full object-cover custom_webOnly'
                src={incline2}
                alt='Incline'
              />

              <div className='flex flex-col justify-start gap-2 xl:gap-4 xl:px-6'>
                <h1 className='text-[30px] font-rale text-white lg:pt-12 '>
                  Hit No Slope
                </h1>
                <p className='text-[#9A9A9A] font-sand text-[20px]'>
                  As soon as you make contact with a change in slope
                  inclination, the motor gives you extra power to fly right up
                  the hill at the same speed as before.
                </p>

                <div className={`${isFullScreen ? '' : ''}`}>
                  {!isFullScreen ? (
                    <button
                      onClick={() => setIsFullScreen(true)}
                      className='flex it items-center hover:underline text-[18px] text-white font-sand pb-12  py-3 gap-2  font-[400] '
                    >
                      Watch how it feels
                      <PlayIcon className='w-5 h-5 mt-1 xl:mt-0.5 ' />
                    </button>
                  ) : (
                    <div className='custom_fullScreen left-0'>
                      <video
                        autoPlay
                        loop
                        playsInline
                        disablePictureInPicture
                        controls={true}
                        className='object-cover absolute top-0 z-0 w-full h-screen'
                      >
                        <source
                          src='https://cdn.shopify.com/videos/c/o/v/49c35e511ff5480fac75911db2d6d100.mp4'
                          type='video/mp4'
                        />
                      </video>
                      <XMarkIcon
                        className='custom_closeBtn'
                        onClick={() => setIsFullScreen(false)}
                      >
                        Close FullScreen
                      </XMarkIcon>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='w-full xl:w-1/2 py-12 xl:py-24'>
              <h3 className='custom_circularSubText'>
                Even the steepest hill before you feels like the flat with
                AdaptivePower. Pull up the app, and we&apos;ll see you at the
                top.
              </h3>
            </div>

            <div className='relative'>
              <div>
                <Image
                  className='w-full h-[100vh] md:h-[90vh] object-cover'
                  src={app}
                  alt='Adaptive-power-app'
                />
              </div>

              <aside
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-offset='200'
                className='absolute bottom-4 pl-2 lg:w-1/3 xl:w-3/12 xl:bottom-28 xl:left-24'
              >
                <h2 className='font-rale font-[400] text-[27px] text-white leading-10 sm:text-[35px] md:font-[500] md:leading-[2.9rem] xl:text-[40px]'>
                  Keep top speed as you rise
                </h2>
                <Link
                  className='flex gap-3 items-center pt-1 text-white font-sand text-[18px] font-[500] xl:pt-4'
                  href='/connect'
                >
                  Track stats in app <ChevronRightIcon className='w-6 h-6' />{' '}
                </Link>
              </aside>

              <aside className='absolute w-1/4 custom_webOnly bottom-28 right-2 '>
                <div
                  data-aos='fade-up'
                  data-aos-duration='600'
                  data-aos-offset='200'
                  className='custom_boxBorder p-6 flex rounded-md flex-col gap-1 items-center'
                >
                  <h3 className='font-sand font-[500] text-[18px]  text-white'>
                    Resistance detected
                  </h3>
                  <p className='text-white opacity-75 text-[14px] font-sand'>
                    25 times during last ride
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaceSection;
