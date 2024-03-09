'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const FaqSection = () => {
  const faqData = [
    {
      title: 'What is the advantage of leasing ?',
      desc: 'Leasing through your employer is fiscally very interesting, since the monthly leasing instalments are taken from your gross salary. Leasing through your employer is on average 40% cheaper than a private purchase. The net deduction from your salary starts from as low as €54 a month spread over a period of 36 months.<br /><br />After the lease period, you can usually exchange or takeover your bicycle at a predetermined residual value, free of charge.',
    },
    {
      title: 'How long is the leasing period ?',
      desc: 'Leasing through your employer is fiscally very interesting, since the monthly leasing instalments are taken from your gross salary. Leasing through your employer is on average 40% cheaper than a private purchase. The net deduction from your salary starts from as low as €54 a month spread over a period of 36 months.<br /><br />After the lease period, you can usually exchange or takeover your bicycle at a predetermined residual value, free of charge.',
    },
    {
      title: 'What happens if I leave my employer ?',
      desc: 'Leasing through your employer is fiscally very interesting, since the monthly leasing instalments are taken from your gross salary. Leasing through your employer is on average 40% cheaper than a private purchase. The net deduction from your salary starts from as low as €54 a month spread over a period of 36 months.<br /><br />After the lease period, you can usually exchange or takeover your bicycle at a predetermined residual value, free of charge.',
    },
    {
      title: 'Can I add insurance to my leasing order ?',
      desc: 'No, it&apos;s usually not possible to add our theft insurance to the offer Most of our leasing partners have their own insurance against theft, accidents, and damages, included in the leasing package. It is of course possible to purchase our insurance privately as an addition to the insurance included in the leasing package.<br /><br />After the lease period, you can usually exchange or take over your bicycle at a predetermined residual value, free of charge.',
    },
    {
      title: 'Can I add accessories to my order ?',
      desc: 'Yes, you can add both the bike and accessories to your order. Please note that some partners don&apos;t consider smartphone mounts* as well as matching phone cases as leasable. Please get in touch with your local partner to get more information on this topic.<br /><br />After the lease period, you can usually exchange or take over your bicycle at a predetermined residual value, free of charge.',
    },
    {
      title: 'What happens if I want to return my Cowboy ?',
      desc: 'Leasing through your employer is fiscally very interesting, since the monthly leasing instalments are taken from your gross salary. Leasing through your employer is on average 40% cheaper than a private purchase. The net deduction from your salary starts from as low as €54 a month spread over a period of 36 months.<br /><br />After the lease period, you can usually exchange or takeover your bicycle at a predetermined residual value, free of charge.',
    },
  ];

  return (
    <div className='bg-[#F6F6F6]'>
      <div className='custom_maxWidth'>
        <h1 className='font-rale text-[120px] font-[500] text-end pt-20'>
          FAQ
        </h1>

        <div className='w-full px-0 xl:px-4 py-12'>
          <div className='w-ful rounded-2xl'>
            {faqData.map((item, index) => (
              <div key={index}>
                <hr />
                <Disclosure as='div' className='py-4'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full justify-between rounded-lg py-2 text-[#1D1D1D] text-left font-sand text-[20px] sm:text-[25px] tracking-tight font-[500] focus:outline-none focus-visible:ring xl:px-4'>
                        <span className='w-[90%]'>{item.title}</span>
                        <ChevronUpIcon
                          className={`${
                            open && 'rotate-180 transform'
                          } h-7 w-7 text-black`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='pt-4 pb-2 xl:px-4'>
                        <p
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                          className='font-sand text-[19px] text-[#1D1D1D] leading-7'
                        />
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
