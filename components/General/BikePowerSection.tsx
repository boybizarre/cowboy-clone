'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import { XMarkIcon } from '@heroicons/react/20/solid';

interface Props {
  mobileImage: StaticImageData;
  videoLinks: Array<string>;
  id: string;
}

const BikePowerSection = ({ mobileImage, videoLinks, id }: Props) => {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <section>
      <div>
        <div className='w-full px-4 text-left xl:px-0 xl:w-[75%] xl:text-center mx-auto'>
          <h1 className='custom_subText pb-12 xl:pb-16'>
            Feel the power. The connected electric bike fits into how you live
            and adapts to how you ride. It&apos;s a new form of performance on
            the street.
          </h1>
        </div>

        {/* web content - videos */}
        <div className='custom_webBike flex flex-col gap-3 md:gap-5'>
          <div className={`${fullScreen ? 'custom_fullScreen' : 'px-4'}`}>
            {!fullScreen ? (
              <div
                id={id}
                onClick={() => setFullScreen(!fullScreen)}
                className='relative'
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  controls={false}
                  className='w-full h-[45vh] sm:h[70vh] xl:h-[95vh] object-cover'
                >
                  <source src={videoLinks[0]} type='video/webm' />
                </video>

                <article className='absolute bottom-12 left-12 flex flex-col gap-1 w-3/12'>
                  <h2 className='text-[22px] font-sand font-[500] text-[#1D1D1D]'>
                    Connected Ride
                  </h2>
                  <p className='font-sand font-[500] text-[#747474]'>
                    Get a good grip and a sporty look with the streamlined
                    handlebars that rise to meet the cockpit. Dock your phone to
                    charge it wirelessly and stay seamlessly connected
                  </p>
                </article>
              </div>
            ) : (
              <div id={id}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  controls={false}
                  className='w-full h-screen object-cover '
                >
                  <source src={videoLinks[0]} type='video/webm' />
                </video>
                <div
                  className='w-12 h-12 bg-white absolute top-6 right-6 rounded-full flex items-center justify-center cursor-pointer'
                  onClick={() => setFullScreen(false)}
                >
                  <XMarkIcon className='z-[9999] w-8 h-8 text-black'>
                    Close Fullscreen
                  </XMarkIcon>
                </div>
                <article className='absolute web-bike top-4 left-12 flex flex-col gap-1 w-3/12 '>
                  <h2 className='text-[22px] font-sand font-[500] text-[#1D1D1D]'>
                    Integrated Cockpit
                  </h2>
                  <p className='font-sand font-[500] text-[#747474]'>
                    Get a good grip and a sporty look with the streamlined
                    handlebars that rise to meet the cockpit. Dock your phone to
                    charge it wirelessly and stay seamlessly connected
                  </p>
                </article>
              </div>
            )}
          </div>

          <div className='flex px-4 gap-3 md:gap-5'>
            <div className='w-1/2'>
              <div id={id}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  controls={false}
                  className='object-cover h-[45vh] xl:h-auto'
                >
                  <source src={videoLinks[1]} type='video/webm' />
                </video>
              </div>

              <h2 className='font-rale text-[24px] font-[500] pt-4 text-left pl-6'>
                Cowboy AdaptivePower™
              </h2>
            </div>

            <div className='w-1/2 '>
              <div id={id}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  controls={false}
                  className='object-cover h-[45vh] xl:h-auto'
                >
                  <source src={videoLinks[2]} type='video/webm' />
                </video>
              </div>
              <h2 className='font-rale text-[16px] font-[500] pt-4 text-right sm:text-[24px] xl:pr-6'>
                Removable Battery
              </h2>
            </div>
          </div>
        </div>

        {/* mobile content - image */}
        <div className='custom_mobileBike'>
          <Image
            className='h-screen object-cover'
            src={mobileImage}
            alt='detail'
          />
        </div>

        <section className='custom_maxWidth pt-12 xl:pt-24'>
          <div className='mx-auto w-full text-left xl:text-center xl:w-[80%]'>
            <h1 className='custom_subText'>
              With looks this sleek, you&apos;ll want to keep an eye on your
              Cowboy to check it&apos;s safe. Insure it, track it and ride with
              your mind at ease.
            </h1>

            <hr className='mx-auto my-6 w-full xl:my-8 xl:w-3/12' />

            <div className='custom_webBike'>
              <p className='font-rale text-[18px] pb-5 text-[#000] '>
                Stay in the loop on how to ride safe and secure when you sign up
                to our newsletter
              </p>
              <button className='bg-[#1D1D1D] font-sand text-[18px] hover:opacity-90 font-[500] px-8 py-3 text-white rounded-full'>
                Sign up
              </button>
            </div>

            <div className='bg-[#F4E9DD] p-4 rounded-md custom_mobileBike'>
              <p className='font-rale text-[18px] pb-5 text-[#000] '>
                Stay in the loop on how to ride safe and secure when you sign up
                to our newsletter
              </p>
              <button className='bg-[#1d1d1d] font-sand text-[18px] hover:opacity-90 font-[500] px-8 py-3 text-white rounded-full'>
                Sign up
              </button>
            </div>
          </div>
        </section>

        <hr className='custom_maxWidth my-10 sm:my-12 xl:my-20' />
      </div>
    </section>
  );
};

export default BikePowerSection;
