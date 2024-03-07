import Link from 'next/link';
import Image from 'next/image';

// images
import gravity from '@/public/adaptive-power-gravity--hero_1920x@2x.webp';
import gravity1 from '@/public/adaptive-power-gravity.webp';

// icons
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const GravitySection = () => {
  return (
    <div>
      <div className='mt-12 mb-12'>
        <section className='pt-6 md:pt-12'>
          <div className='relative'>
            <Image
              className='h-screen object-cover lg:h-auto'
              src={gravity}
              alt='Adaptive-power-gravity'
            />

            <div className='absolute top-4 left-4 xl:top-20 xl:left-[2.8rem]'>
              <div data-aos-easing='ease-in' className='custom_paceText'>
                <span
                  data-aos='fade-up'
                  data-aos-duration='600'
                  data-aos-offset='200'
                >
                  Feel weightless.
                </span>
                <span
                  data-aos='fade-up'
                  data-aos-duration='600'
                  data-aos-offset='280'
                  className='-mt-2 xl:mt-0'
                >
                  <i>Even</i> overloaded.
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
                  Gravity Detected
                </p>
                <div className='flex gap-3 text-white'>
                  <p className='font-sand'>3</p>
                  <h2 className='font-rale font-[500] text-[30px] leading-10 xl:text-[45px] xl:leading-[50px]'>
                    AdaptivePower senses extra weight
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='custom_maxWidth py-10 xl:pt-24 xl:pb-16'>
          <div className='flex flex-col gap-5 border-b xl:flex-row xl:border-0'>
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
                src={gravity1}
              />

              <div className='flex flex-col justify-start gap-2 xl:gap-4 xl:px-6'>
                <h1 className='text-[30px] font-rale text-white lg:pt-12 '>
                  Weight no more
                </h1>
                <p className='text-[#9A9A9A] font-sand text-[20px]'>
                  With all this extra power talk,battery efficiency is our walk
                  . Switch to power saving as you ride for more efficiency when
                  you need it .
                </p>
                <Link
                  href='/accessories'
                  className='flex items-center gap-1 text-white font-sand text-[20px]'
                >
                  View accessories{' '}
                  <ChevronRightIcon className='h-6 w-6 mt-1 xl:mt-0.5' />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GravitySection;
