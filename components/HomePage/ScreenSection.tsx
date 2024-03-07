import Image from 'next/image';
import Link from 'next/link';
import setting from '@/public/Screens/app-card-settings_183x@2x.png';
import badge from '@/public/Screens/app-card-badge_183x@2x.png';
import theft from '@/public/Screens/app-card-theft_183x@2x.png';
import analysis from '@/public/Screens/app-card-analysis_183x@2x.png';
import board from '@/public/Screens/app-card-leaderboard_183x@2x.png';
import summary from '@/public/Screens/app-card-summary_183x@2x.png';
import weather from '@/public/Screens/app-card-weather_183x@2x.png';
import homeScreen from '@/public/Screens/index-app-homescreen_168x@3x.webp';
import air from '@/public/Screens/app-card-air-quality_183x@2x.png';
import battery from '@/public/Screens/app-card-battery_183x@2x.png';
import location from '@/public/Screens/app-card-air_183x@2x.png';
import calendar from '@/public/Screens/app-card-calendar_183x@2x.png';
import chart from '@/public/Screens/app-card-chart_183x@2x.png';
import chart1 from '@/public/Screens/app-card-analysis-chart_183x@2x.png';
import nav from '@/public/Screens/app-card-nav_183x@2x.png';

const ScreenSection = () => {
  return (
    <div className='overflow-x-hidden z-50 bg-[#F6F6F6]'>
      <div className='grid custom_pictureGrid pt-8 w-[180vw] items-center gap-4 lg:w-[109vw] xl:pt-20'>
        <div
          className='grid gap-4'
          data-aos='fade-down'
          data-aos-duration='3000'
          data-aos-offset='300'
        >
          <Image src={setting} alt='Setting' />
          <Image src={badge} alt='Badge' />
        </div>

        <div
          className='grid gap-4'
          data-aos='fade-up'
          data-aos-duration='3000'
          data-aos-offset='300'
        >
          <Image src={theft} alt='Theft' />
          <Image src={analysis} alt='Analysis' />
          <Image src={board} alt='Board' />
        </div>

        <div
          className='grid gap-4'
          data-aos='fade-down'
          data-aos-duration='3000'
          data-aos-offset='300'
        >
          <Image src={summary} alt='Summary' />
          <Image src={weather} alt='Weather' />
        </div>

        <div data-aos='fade-up' data-aos-duration='3000' data-aos-offset='300'>
          <Image src={homeScreen} alt='Home-Screen' />
        </div>

        <div
          className='grid gap-4'
          data-aos='fade-down'
          data-aos-duration='3000'
          data-aos-offset='300'
        >
          <Image src={air} alt='Air' />
          <Image src={battery} alt='Battery' />
        </div>

        <div
          className='grid gap-4'
          data-aos='fade-up'
          data-aos-duration='3000'
          data-aos-offset='300'
        >
          <Image src={location} alt='Location' />
          <Image src={calendar} alt='Calendar' />
          <Image src={chart} alt='Chart' />
        </div>

        <div
          className='grid gap-4'
          data-aos='fade-down'
          data-aos-duration='3000'
          data-aos-offset='300'
        >
          <Image src={chart1} alt='Chart-1' />
          <Image src={nav} alt='nav' />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center w-[85%] text-center mx-auto pt-0 pb-8 gap-4 xl:gap-6 xl:py-24 xl:w-full '>
        <h1 className='font-[500] font-rale text-[#1D1D1D] text-[40px] text-center leading-[3.5rem] sm:text-[55px] lg:text-[65px] xl:tracking-tight xl:leading-[4rem]'>
          It&apos;s a great day for a ride
        </h1>
        <p className='font-sand text-[20px] text-[#1D1D1D] opacity-90'>
          Connectivity is at the heart of your Cowboy
        </p>
        <Link href='/connect' className='custom_bgBlackBtn mt-4'>
          Explore Connect
        </Link>
      </div>
    </div>
  );
};

export default ScreenSection;
