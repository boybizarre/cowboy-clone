import Image from 'next/image';
import React from 'react';
import options from '../../public/leasing-partners--options.webp';

const Options = () => {
  return (
    <div>
      <div className='custom_maxWidth'>
        <div className='flex flex-col items-center gap-4 lg:flex-row'>
          <div className='w-full px-0 flex flex-col gap-3 xl:px-4 xl:w-5/12 xl:gap-6'>
            <p className='font-sand text-[#1D1D1D] text-[18px] font-[500] '>
              Flexible leasing options
            </p>
            <h2 className='text-black font-rale leading-10 md:leading-[3rem] text-[35px] sm:text-[40px] md:text-[55px] xl:leading-[3.8rem]'>
              An option for every rider
            </h2>
            <div className='space-y-6'>
              <p className='font-sand font-[500] text-[#1D1D1D] text-[18px] xl:font-[600] '>
                We work with multiple leasing providers and types. This can take
                various forms: part from your gross monthly salary, gross
                end-of-year bonus or gross bonus. Some companies work with a
                cafeteria plan, on the basis of which the lease is established.
              </p>
              <p className='font-sand font-[500] text-[#1D1D1D] text-[18px] xl:font-[600]'>
                After the lease period, you can usually exchange or take over
                your bicycle at a predetermined residual value, free of charge.
              </p>
            </div>
          </div>

          <div className='w-full xl:w-7/12'>
            <Image
              className='h-screen object-cover'
              src={options}
              alt='Flexible Leasing Options'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Options;
