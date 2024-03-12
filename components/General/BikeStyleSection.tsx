import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { ChevronRightIcon } from '@heroicons/react/20/solid';


interface Props {
  data: {
    id: Array<string>;
    subText: string;
    labels: Array<string>;
    images: Array<StaticImageData>;
    altText: string;
  }
}

const BikeStyleSection = ({ data }: Props) => {
  return (
    <section>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-full px-4 mx-auto text-left xl:px-0 xl:w-[77%] xl:text-center'>
          <h1 className='custom_subText pb-16 xl:pb-20'>
            {data.subText}
          </h1>
        </div>

        <div
          id={data.id[1]}
          className='relative w-full flex items-center justify-center'
        >
          <Image
            className='w-full object-cover h-50vh sm:h-auto xl:scale-100 xl:w-[65%]'
            src={data.images[0]}
            alt='Classic-black'
          />
          <div className='custom_webBike'>
            <div>
              <p className='absolute top-5 left-[20%] font-sand font-[500]'>
                {data.labels[0]}
              </p>
              <div className='absolute h-[1.5px] bg-[#DCD6D6] top-12 left-[20%] w-[14%]' />
            </div>
            <div>
              <p className='absolute top-[29%] right-16 font-sand font-[500]'>
                {data.labels[1]}
              </p>
              <div className='absolute h-[1.5px] bg-[#DCD6D6] top-[34%] right-16 w-1/4' />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='mx-auto w-full py-8 xl:pt-20 xl:pb-16 xl:w-[70%]'>
          <h1 className='custom_webBike text-center font-rale font-[500] text-[40px] sm:text-[55px] lg:text-[85px] xl:text-[95px] xl:leading-[6.5rem]'>
            Elevate your ride to meet your style
          </h1>
          <p className='custom_subText font-sand py-7 px-4 text-[#1D1D1D] font-[500] xl:text-[27px] xl:text-[#747474] xl:py-12'>
            A Cowboy bike is designed to be beautiful inside and out. Every
            detail integrates seamlessly into the frame, crafted to the highest
            standard.
          </p>
        </div>

        <div className='relative flex flex-col gap-4 px-4'>
          {/* top full image */}
          <div
            id={data.id[0]}
            className='relative w-full rounded-md object-cover'
          >
            <Image
              className='w-full h-[50vh] sm:h-[70vh] xl:h-auto object-cover'
              src={data.images[1]}
              alt='Classic'
            />
            <article className='custom_webBike absolute top-12 left-12 flex flex-col gap-2 w-1/4'>
              <h1 className='font-sand text-[27px] font-[500] text-[#1D1D1D]'>
                Design details
              </h1>
              <p className='text-[#747474] font-sand font-[500]'>
                With every detail considered, it&apos;s built to hold up to the
                elements on the long road
              </p>
            </article>
          </div>

          <div className='flex flex-col-reverse xl:h-[100vh] xl:flex-row gap-4'>
            <div
              id={data.id[0]}
              className='w-full h-auto rounded-md relative overflow-y-hidden xl:w-2/3'
            >
              <Image
                className='object-cover scale-100 xl:scale-[70%]'
                src={data.images[2]}
                alt='classic-detail'
              />
              <article className='custom_webBike absolute top-12 left-12 flex flex-col gap-2 w-3/12'>
                <h1 className='font-sand text-[27px] font-[500] text-[#1d1d1d]'>
                  Craftmanship
                </h1>
                <p className='text-[#747474] font-sand font-[500]'>
                  Engineering excellence gives Cowboy cred with our riders and
                  design critics.
                </p>
              </article>
            </div>

            <div className='w-full rounded-md flex flex-col xl:w-1/3'>
              <div
                id={data.id[0]}
                className='relative overflow-y-hidden xl:h-[60vh]'
              >
                <article className='custom_webBike pl-6 pt-4 flex flex-col gap-2 w-7/12'>
                  <h1 className='font-sand text-[27px] font-[500] text-[#1D1D1D]'>
                    Materials
                  </h1>
                  <p className='text-[#747474] font-sand font-[500]'>
                    Engineering excellence gives Cowboy cred with our riders and
                    design critics.
                  </p>
                </article>
                <Image
                  className='xl:scale-[75%]'
                  src={data.images[3]}
                  alt='classic-detail'
                />
              </div>

              <div className='pt-6 w-full mx-auto xl:w-[80%]'>
                <h2 className='font-sand text-[#1D1D1D] text-[24px] font-[500] '>
                  You&apos;ve got the gear
                </h2>
                <p className='font-sand text-[#545353] font-[500] py-3'>
                  Custom accessories for stunning versatility on the road, along
                  with spare parts when you need them.
                </p>
                <Link
                  href='/accessories'
                  className='flex gap-1 items-center font-sand text-[18px] font-[600] text-[#1d1d1d]'
                >
                  Explore accessories
                  <ChevronRightIcon className='w-5 h-5 mt-1' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeStyleSection;
