import Image, { StaticImageData } from 'next/image';


import { BsInstagram } from 'react-icons/bs';

interface Props {
  data: {
    bikeName: string,
    images: Array<StaticImageData>,
  }
}

const BikeStreetSection = ({ data }: Props) => {
  return (
    <section>
      <div className='custom_maxWidth flex flex-col gap-6 py-9 xl:py-12 xl:flex-row'>
        {/* desc */}
        <div className='w-full flex flex-col justify-between xl:w-1/3'>
          <h1 className='font-rale text-[25px] font-[500] text-[#000] leading-10 md:text-[32px]'>
            See the {data.bikeName} on the streets
          </h1>
          <div className='custom_webBike flex items-center pb-3 gap-2 xl:border-b'>
            <div className='w-9 h-9 bg-black flex items-center justify-center rounded-full'>
              <BsInstagram className='w-4 h-4 text-white' />
            </div>
            <p className='font-sand font-[500] text-[18px] '>
              Follow on Instagram
            </p>
          </div>
        </div>

        {/* images */}
        <div className='w-full xl:w-8/12 grid grid-cols-2 xl:grid-cols-4 grid-rows-2 gap-4'>
          <div className='col-span-2 row-span-2 relative overflow-hidden'>
            <Image
              className='object-cover h-[59vh] hover:scale-110 transition duration-[0.9s]'
              src={data.images[0]}
              alt={`${data.bikeName} Bike`}
            />
          </div>

          <div className='relative overflow-hidden'>
            <Image
              className='object-cover h-[28vh] hover:scale-110 transition duration-[0.9s]'
              src={data.images[1]}
              alt={`${data.bikeName} Bike`}
            />
          </div>

          <div className='relative overflow-hidden'>
            <Image
              className='object-cover h-[28vh] hover:scale-110 transition duration-[0.9s]'
              src={data.images[2]}
              alt={`${data.bikeName} Bike`}
            />
          </div>

          <div className='relative overflow-hidden'>
            <Image
              className='object-cover h-[28vh] hover:scale-110 transition duration-[0.9s]'
              src={data.images[3]}
              alt={`${data.bikeName} Bike`}
            />
          </div>

          <div className='relative overflow-hidden'>
            <Image
              className='object-cover h-[28vh] hover:scale-110 transition duration-[0.9s]'
              src={data.images[4]}
              alt={`${data.bikeName} Bike`}
            />
          </div>
        </div>

        <div className='custom_mobileBike'>
          <div className='flex flex-row items-center pb-3 gap-2'>
            <div className='w-9 h-9 bg-black flex items-center justify-center rounded-full'>
              <BsInstagram className='w-4 h-4 text-white' />
            </div>
            <p className='font-sand font-[500] text-[18px] '>
              Follow on Instagram
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BikeStreetSection;
