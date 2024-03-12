'use client';

import updates from '@/public/connect--app-updates.webp';
import control from '@/public/connect--ride-dashboard.webp';
import Image from 'next/image';
import { Parallax } from 'react-parallax';

const ShareRide = () => {
  return (
    <div>
      <Parallax bgImage='./connect--lifestyle-2.webp' strength={270}>
        <div className='h-[112vh]' />
      </Parallax>

      <div className='custom_maxWidth'>
        <div
          data-aos='fade-up'
          data-aos-duration='800'
          data-aos-easing='ease-in-sine'
          className='w-full xl:w-6/12 flex flex-col gap-4 pb-12 xl:pb-20 pt-8 xl:pt-16 '
        >
          <h1 className='custom_connectMainText'>Stay on course</h1>
          <h3 className='custom_subText'>
            Enjoy turn-by-turn navigation and stay connected on every ride with
            Cowboy&apos;s predictive technology. Activate Share My Ride to let
            friends and loved ones follow your journey in realtime and
            you&apos;ll see their reactions along the way.
          </h3>
        </div>

        <div className='relative'>
          <video
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controls={false}
            className='object-cover custom_mediaWrapper h-[100vh] w-[100%]'
          >
            <source
              src='https://cowboy.com/cdn/shop/t/28/assets/cruiser--plan-your-route.webm?v=20347827663738573561689510074'
              type='video/mp4'
            />
          </video>
          <div className='absolute left-[4rem] bottom-[12%] w-[35%] custom_webOnly z-20'>
            <h1 className='font-sand pb-2 font-[600] text-[24px]  text-[#1d1d1d]'>
              Navigate with Google Maps
            </h1>
            <p className='text-[16px] text-[#747474] font-[500] font-sand'>
              With Google Maps, experience on-ride navigation exclusive to the
              Cowboy rider community. Find the clear air, break free from
              congestion, be guided to your favorites, and even find bike
              parking spots.
            </p>
          </div>

          {/* mobile only */}
          <div className='custom_mobileBike'>
            <h1 className='custom_connectHeadingText pt-4 pb-2'>
              Navigate with Google Maps
            </h1>
            <p className='custom_connectParagraphText'>
              With Google Maps, experience on-ride navigation exclusive to the
              Cowboy rider community. Find the clear air, break free from
              congestion, be guided to your favorites, and even find bike
              parking spots.
            </p>
          </div>
        </div>

        <section className='flex flex-col pt-12 pb-16 items-start gap-8 xl:py-24 xl:flex-row-reverse xl:gap-6'>
          {/* hide on mobile */}
          <div className='w-full xl:w-7/12'>
            <div className='custom_mediaWrapper custom_webBike rounded-md flex justify-center items-center w-full xl:h-[120vh]'>
              <Image
                className='w-full xl:w-[95%]'
                src={updates}
                alt='Connect-app-updates'
              />
            </div>
          </div>

          <div className='w-full xl:w-5/12'>
            <div className='custom_mediaWrapper rounded-md w-[100%] relative overflow-hidden py-8 flex items-end justify-center xl:py-0  xl:h-[80vh]'>
              <Image
                src={control}
                alt='Connect-app-control'
                className='w-full'
              />
            </div>
            <div className='pt-4 flex flex-col gap-3 xl:pt-8 xl:gap-5'>
              <h2 className='custom_connectHeadingText'>Ride Dashboard</h2>
              <hr />
              <p className='custom_connectParagraphText'>
                Monitor your speed and check your ride stats at a glance or in
                detail if you want to go deep.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ShareRide;
