
import Image from 'next/image';
import Link from 'next/link';

// images and icons
import lease from '../../public/leasing-partners1.jpg';
import { ArrowDownIcon } from '@heroicons/react/20/solid';

const LeasingHero = () => {
  return (
    <div>
      <div className='absolute top-0 z-0 object-cover w-full h-screen'>
        <Image className='w-full h-full object-cover' src={lease} alt='Lease' />
      </div>

      <div className='custom_powerText'>
        <div
          data-aos='fade-up'
          data-aos-duration='600'
          data-aos-offset='120'
          className='flex flex-col '
        >
          <p className='text-white font-sand font-[500] text-[21px] '>
            From only €54/month
          </p>
          <h1 className='tracking-tight font-[500] font-rale text-[40px] text-white py-6 sm:text-[55px] md:py-0 lg:text-[100px]'>
            Lease a Cowboy
          </h1>
          <button className='bg-white mx-auto text-[#1D1D1D] px-8 font-[600] text-[19px] mt-4 py-2.5 font-sand rounded-full'>
            Get Started
          </button>
          <div className=''>
            <Link
              href='#provider'
              className='bg-white group hover:bg-[#000] h-12 w-12 mt-40 xl:mt-24 flex items-center justify-center text-center rounded-full mx-auto'
            >
              <ArrowDownIcon className='custom_animation mx-auto w-5 h-12 group-hover:text-white text-[#1D1D1D]' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeasingHero