'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

// images
import img2 from '../../public/classic-black-bike.webp';
import img3 from '../../public/cruiser-sand2.webp';
import img4 from '../../public/cruiser-st-lavender1.webp';

// icons
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Collection = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    {
      id: 'item-classic',
      path: 'classic',
      image: img2,
      deliveryPeriod: 'Delivered from 10 days',
      bikeType: 'Classic',
    },
    {
      id: 'item-cruiser',
      path: 'cruiser',
      image: img3,
      deliveryPeriod: 'Delivered from 10 days',
      bikeType: 'Cruiser',
    },
    {
      id: 'item-cruiserst',
      path: 'cruiser-st',
      image: img4,
      deliveryPeriod: 'Delivered from 10 days',
      bikeType: 'Cruiser ST',
    },
  ];

  return (
    <div>
      <div className='inset-0 flex items-center justify-center'>
        <button
          type='button'
          className='custom_mobileNavText uppercase custom_m_view flex items-center gap-1'
          onClick={() => setIsOpen(true)}
        >
          E-Bikes <ChevronDownIcon className='w-6 h-6 opacity-90' />
        </button>
      </div>
      <Transition
        appear
        show={isOpen}
        as={Fragment}
        className='custom_ebikes_popup'
      >
        <Dialog
          as='div'
          className='relative z-50'
          onClose={() => setIsOpen(false)}
        >
          {/* blurry background */}
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-75' />
          </Transition.Child>

          {/* main modal */}
          <div className='fixed inset- w-[95%] h-auto mx-auto px-8 bg-white rounded-md top-[50%] left-[50%] -translate-x-[50%] -translate-y-[75%] overflow-y-hidden md:px-3'>
            <div className='flex items-center justify-center text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-full transform overflow-hidden rounded-none text-left align-middle transition-all'>
                  <Dialog.Description>
                    <div className='py-4 grid grid-cols-2 gap-4 md:grid-cols-4'>
                      <div
                        onClick={(e) => router.push('/test-ride')}
                        className='relative flex flex-col cursor-pointer p-4'
                      >
                        <p className='uppercase text-[16px] font-rale font-[500] text-[#1D1D1D]'>
                          Our E-Bikes
                        </p>
                        <h2 className='font-sand font-[500] text-[28px] leading-8 pt-8 pb-28'>
                          Three models to choose from
                        </h2>
                        <div className='custom_flexCenter hover:underline font-sand text-[18px] text-[#1D1D1D] font-[500] gap-1 w-fit'>
                          <Link
                            href='/test-ride'
                            onClick={(e) => e.stopPropagation()}
                          >
                            Book a test ride
                            <ChevronRightIcon className='inline-block w-6 h-6 ' />
                          </Link>
                        </div>
                      </div>

                      {data.map((bike) => (
                        <Link
                          key={bike.id}
                          id={bike.id}
                          // onClick={() => router.push(`/e-bike/${bike.path}`)}
                          href={`/e-bike/${bike.path}`}
                          className='relative rounded-md'
                        >
                          <div className='overflow-hidden relative-h-full w-[95%] mx-auto mt-8'>
                            <Image
                              alt={bike.bikeType}
                              src={bike.image}
                              className='cursor-pointer object-contain w-[100%] sm:h-[400px] md:h-[360px]'
                            />
                          </div>
                          <div className='custom_modal_text p-4'>
                            <p className='text-[18px] font-rale font-[500] text-[#1D1D1D]'>
                              {bike.deliveryPeriod}
                            </p>
                            <h2 className='font-sand font-[500] text-[28px] leading-8 pt-8 pb-28'>
                              {bike.bikeType}
                            </h2>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Dialog.Description>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Collection;
