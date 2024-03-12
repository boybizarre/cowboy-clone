'use client';

import Image from 'next/image';

// images
import classic from '@/public/classic-black-bike.webp';
import cruiser from '@/public/cruiser-sand2.webp';
import cruiserst from '@/public/cruiser-st-lavender1.webp';

// data
import { modelData } from '../../utils/utilsData';

const BikeModelsSection = () => {
  return (
    <section>
      <div className='custom_maxWidth py-12 xl:py-20'>
        <h1 className='font-rale text-[50px] text-[#1D1D1D] font-[500] sm:text-[65px] lg:text-[90px] xl:text-[110px]'>
          Our models
        </h1>

        <div className='custom_hideHorizontalScrollBar relative overflow-x-scroll xl:overflow-x-hidden'>
          <table className='table-fixed border-collapse border-sapce-8 w-[220vw] sm:w-[150%] lg:w-[100%]'>
            <thead className='border-b'>
              <tr>
                <th></th>

                <th>
                  <Image
                    className='w-[260px] object-contain pr-6 xl:pr-0'
                    src={classic}
                    alt='classic'
                  />
                </th>

                <th>
                  <Image
                    className='w-[260px] object-contain pr-6 xl:pr-0'
                    src={cruiser}
                    alt='classic'
                  />
                </th>

                <th>
                  <Image
                    className='w-[260px] object-contain pr-6 xl:pr-0'
                    src={cruiserst}
                    alt='classic'
                  />
                </th>
              </tr>

              <tr>
                <th></th>
                <th className='custom_bikeTitle'>Classic</th>
                <th className='custom_bikeTitle'>Cruiser</th>
                <th className='custom_bikeTitle'>Cruiser ST</th>
              </tr>

              <tr>
                <th></th>
                <th className='custom_bikeDesc'>
                  The iconic frame with a new performance standard for a sporty,
                  active ride.
                </th>
                <th className='custom_bikeDesc'>
                  A raised handlebar and higher gear ratio on the original frame
                  for a more comfortable ride.
                </th>
                <th className='custom_bikeDesc'>
                  An open frame with an upright riding position for a
                  relaxed,active and accessible ride.
                </th>
              </tr>
            </thead>

            <tbody>
              {modelData.map((model) => (
                <tr className='border-b' key={model.id}>
                  <td className='py-5 px-1 font-sand text-[18px] font-[500]'>
                    {model.col1}
                  </td>
                  <td className='custom_bikeText py-4 pr-6'>{model.col2}</td>
                  <td className='custom_bikeText py-4 pr-6'>{model.col3}</td>
                  <td className='custom_bikeText py-4 pr-6'>{model.col4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BikeModelsSection;
