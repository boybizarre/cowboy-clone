'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/cowboy-logo.png';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { BsBag } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

// components
import Collection from '@/components/General/Collection';

const Navbar = ({ inverted }: { inverted?: boolean }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [mobile, setMobile] = useState(false);

  return (
    <div className='relative z-40'>
      <div className='max-w-7xl mx-auto'>
        <nav className={`bg-transparent flex justify-between items-center py-[20px] px-3 md:py-16px] xl:px-2 ${
                  inverted ? 'text-black' : 'text-white'
                }`}>
          <Link href='/' className='left relative z-50'>
            <Image
              className={`w-[10rem] sm:w-[10.5rem] ${
                inverted ? 'invert-[0%]' : 'invert-[100%]'
              }`}
              src={logo}
              alt='Cowboy-Logo'
            />
          </Link>

          <div
            className={
              mobile
                ? `custom_mobileNav z-50 ${inverted
                  ? 'custom_mobileNavBgWhite'
                  : 'custom_mobileNavBgBlack'
                }`
                : 'custom_webNav right flex items-center gap-6 xl:gap-[12px] 2xl:gap-20 '}
            onClick={() => setMobile(false)}
          >
            <div className='center pb-6 xl:py-0 xl:uppercase'>
              <ul
                className='font-mont gap-4 flex flex-col xl:items-center xl:flex-row 2xl:gap-6'
              >
                <li>
                  <Collection />
                </li>
                <li className='custom_bikes custom_mobileNavText'>
                  <Link href='/e-bike/cruiser'>Cruiser</Link>
                </li>
                <li className='custom_bikes custom_mobileNavText'>
                  <Link href='/e-bike/cruiser-st'>Cruiser ST</Link>
                </li>
                <li className='custom_bikes custom_mobileNavText'>
                  <Link href='/e-bike/classic'>Classic</Link>
                </li>
                <li className='custom_mobileNavText'>
                  <Link href='/connect'>Connect</Link>
                </li>
                <li className='custom_mobileNavText'>
                  <Link href='/accessories'>Accessories</Link>
                </li>
                <li className='custom_mobileNavText'>
                  <Link href='/adaptive-power'>Circular</Link>
                </li>
                <li className='custom_mobileNavText'>
                  <Link href='/leasing'>Leasing</Link>
                </li>
              </ul>
            </div>

            <div className='flex xs:flex-row flex-col items-center justify-between gap-6'>
              <Link
                href='/test-ride'
                className='custom_mobileNavText '
              >
                Book A Test Ride
              </Link>
              <button
                className={`rounded-full uppercase text-[18px] font-mont font-[500] px-7 py-4 bg-[#1D1D1D] hover:opacity-80 text-[#FFF] xl:px-5 xl:text-[15px] xl:py-3 ${
                  inverted ? 'xl:bg-[#1D1D1D] xl:text-white' : 'xl:bg-white xl:text-[#1D1D1D]'
                }`}
              >
                Order Now
              </button>
              <BsBag className='custom_icon w-6 h-6 xl:visiblecursor-pointer' />
            </div>
          </div>

          {/* Mobile Nav */}
          <button
            className='flex custom_menu items-center gap-4 xs:gap-6'
            onClick={() => setMobile(!mobile)}
          >
            <BsBag className=' w-7 h-7' />
            {mobile ? (
              <XMarkIcon className='w-9 h-9 ' />
            ) : (
              <Bars3BottomRightIcon className='w-8 h-8 ' />
            )}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
