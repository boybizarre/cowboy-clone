'use client';

import Image from 'next/image';
import antiTheft from '../../public/connect--anti-theft.webp';

import { Parallax } from 'react-parallax';

const TheftInsurance = () => {
  return (
    <div>
      <Parallax
        bgImage='./connect--lifestyle-1.webp'
        bgImageAlt='Connect-app-control'
        strength={270}
      >
        <div className='h-[112vh]'></div>
      </Parallax>

      <div className='custom_maxWidth'>
        <div
          data-aos='fade-up'
          data-aos-duration='800'
          data-aos-easing='ease-in-sine'
          className='w-full xl:w-6/12 flex flex-col gap-4 pt-8 xl:pt-16 '
        >
          <h1 className='custom_connectMainText'>Rest easy</h1>
          <h3 className='custom_connectSubText'>
            With <span className='underline'>Theft Insurance</span> enabled,
            we&apos;ll alert you immediately if someone tries to snatch your
            bike. Plus, our GPS tracking ensures you can always locate your ride
            no matter where you are.
          </h3>
        </div>

        <section className='flex flex-col pt-12 pb-16 items-start gap-8 xl:py-24 xl:flex-row-reverse xl:gap-6'>
          <div className='w-full xl:w-7/12'>
            <div className='custom_mediaWrapper custom_webBike rounded-md flex justify-center items-center w-full xl:h-[120vh]'>
              <video
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                controls={false}
                className='object-cover rounded-md h-screen'
              >
                <source
                  src='https://cowboy.com/cdn/shop/t/28/assets/connect--find-my-bike.webm?v=20162767268800190671689605069'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>

          <div className='w-full xl:w-5/12'>
            <div className='custom_mediaWrapper rounded-md w-[100%] h-[80vh] flex items-end justify-center'>
              <Image
                src={antiTheft}
                alt='Connect-app-control'
                className='w-full h-full object-cover aspect-square'
              />
            </div>
            <div className='pt-4 flex flex-col gap-3 xl:pt-8 xl:gap-5'>
              <h2 className='custom_connectHeadingText'>Find My Bike</h2>
              <hr />
              <p className='custom_connectParagraphText'>
                Whether near or far, you&apos;ll be able to locate your bike at
                all times with GPS tracking. Follow the signal to pinpoint its
                exact location.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TheftInsurance;
