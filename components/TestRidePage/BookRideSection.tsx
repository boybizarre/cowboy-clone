import { testRideData } from '../../utils/utilsData';

const BookRideSection = () => {
  return (
    <section id='preview'>
      <div className='custom_maxWidth pt-12 xl:pt-24'>
        <div className='w-full xl:w-6/12 flex flex-col gap-4'>
          <h3 className='custom_subText'>
            Try one of our bikes to discover how it fits your style and the way
            you like to ride. A test rider will come to you to show you the new
            way of cycling in and around the city.
          </h3>
          <button className='bg-[#1D1D1D] text-white w-fit font-sand font-[400] text-[18px] rounded-full px-6 py-3'>
            Book a free test ride
          </button>
        </div>

        <div className='py-12 xl:py-24'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
            {testRideData.map((item) => (
              <div className='bg-[#EFEDE9] py-10' key={item.id}>
                <div className='px-6'>
                  <h1 className='text-[#1d1d1d] text-[25px] font-sand font-[500]'>
                    {item.id} {item.title}
                  </h1>
                  <p className='text-[18px] font-sand font-[500] text-[#00000080]'>
                    {item.subText}
                  </p>
                </div>
                <hr className='my-9 bg-[#D7D3D3] h-[2px]' />
                <ul className='list-inside list-disc px-6 font-[500] text-[17px] text-black font-sand'>
                  {item.descList.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookRideSection;
