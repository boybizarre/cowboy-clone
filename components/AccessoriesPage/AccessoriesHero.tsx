import Image from 'next/image';
import Link from 'next/link'
import AccessoriesHeroImg from '../../public/accessories--hero2.jpg'
import { ArrowDownIcon } from '@heroicons/react/20/solid';

const AccessoriesHero = () => {
  return (
    <div>
      <div className='absolute top-0 left-0 w-full h-screen object-cover'>
        <Image
          alt='Accessories Hero Image'
          src={AccessoriesHeroImg}
          className='w-full h-[104vh] object-cover'
        />

        <div className='custom_centerHeroText '>
          <div
            data-aos='fade-up'
            data-aos-duration='600'
            data-aos-offset='200'
            data-aos-easing='ease-in'
            className='flex flex-col'
          >
            <p className='text-white font-sand font-[500] text-[21px] pb-4'>
              Accessories
            </p>
            <h1 className='tracking-tight font-rale main-text text-[40px] sm:text-[55px] lg:text-[100px] font-[500]  text-white'>
              Gear up for the road
            </h1>
            <div className=''>
              <Link
                href='#filters'
                className='group bg-white hover:bg-black h-12 w-12 mt-24 flex items-center justify-center text-center rounded-full mx-auto'
              >
                <ArrowDownIcon className='custom_animation mx-auto w-5 h-12 group-hover:text-white text-[#1d1d1d]' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccessoriesHero;