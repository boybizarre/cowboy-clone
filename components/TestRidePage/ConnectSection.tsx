const ConnectSection = () => {
  return (
    <section>
      <div className='custom_maxWidth py-10 xl:py-20'>
        <div className='w-full xl:w-1/2'>
          <h3 className='custom_connectSubText'>
            The defining features of a Cowboy deserve a closer look, and the
            ride feeling is unlike anything you&apos;ve ever tried. Get ready to
            experience it yourself.
          </h3>
        </div>

        <div className='flex flex-col gap-6 py-12 xl:py-24 xl:flex-row'>
          <div className='w-full xl:w-8/12'>
            <div className='custom_mediaWrapper'>
              <video
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                controls={false}
                className='h-screen w-full object-cover'
              >
                <source
                  src='https://cowboy.com/cdn/shop/t/28/assets/cowboy-4-st--app-3.webm?v=163536191504769648511689509538'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>

          <div className='w-full xl:w-4/12'>
            <div>
              <video
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                controls={false}
                className='object-cover h-[60vh]'
              >
                <source
                  src='https://cowboy.com/cdn/shop/t/28/assets/cowboy-4-st--assistance.webm?v=100982784447075940551689509566'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col gap-4 xl:w-1/2'>
          <h3 className='custom_connectSubText'>
            Don&apos;t miss out on trying the Cowboy experience, and soon enough
            it&apos;ll be yours.
          </h3>
          <button className='bg-[#1D1D1D] text-white w-fit font-sand font-[400] text-[18px] rounded-full px-6 py-3 mt-3'>
            Book a free test ride
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
