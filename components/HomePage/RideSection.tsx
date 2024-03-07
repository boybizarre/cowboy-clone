'use client';

import { useState } from 'react';
import { PlayIcon, XMarkIcon } from '@heroicons/react/20/solid';

const RideSection = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div className=''>
      <div className='custom_videoContainer'>
        {!isFullScreen ? (
          <div>
            <video
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              controls={false}
              className='object-cover top-0 z-0 w-full h-[110vh]'
            >
              <source
                src='https://cdn.shopify.com/videos/c/o/v/c5609adcb6334fdfbe92dba0b95b70b0.mp4'
                type='video/mp4'
              />
            </video>
            <div className='custom_filmBtn z-50 bg-white rounded-full hover:opacity-75 '>
              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className='flex items-center text-[18px] font-sand px-6 py-3 gap-2 font-[500] '
              >
                Watch Film <PlayIcon className='w-5 h-5 ' />{' '}
              </button>
            </div>
          </div>
        ) : (
          <div className='custom_fullScreen'>
            <video
              autoPlay
              loop
              playsInline
              disablePictureInPicture
              controls={true}
              className='object-cover w-full h-screen'
            >
              <source
                src='https://cdn.shopify.com/videos/c/o/v/c5609adcb6334fdfbe92dba0b95b70b0.mp4'
                type='video/mp4'
              />
            </video>
            <XMarkIcon
              className='custom_closeBtn'
              onClick={() => setIsFullScreen(false)}
            >
              Close Fullscreen
            </XMarkIcon>
          </div>
        )}
      </div>
    </div>
  );
};

export default RideSection;
