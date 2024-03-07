import { useState } from 'react';
import Link from 'next/link';
import { categoryList, compatibilityList } from '@/utils/utilsData';

const TabsSection = () => {
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(0);

  return (
    <div className='relative'>
      <div className='sticky z-50 w-full'>
        <div id='filters' className='bg-white py-6 w-full top-0 z-50'>
          <div className='max-w-7xl mx-auto px-4'>
            <div className='flex justify-between'>
              <ul className='overflow-x-auto custom_hideHorizontalScrollBar flex items-center gap-3'>
                <p className='text-[#1D1D1D] text-[18px] font-sand font-[600]'>
                  Category
                </p>
                {categoryList.map((category) => (
                  <div
                    key={category.id}
                    id=''
                    className='flex justify-center items-center'
                  >
                    <Link
                      onClick={() => setSelected(category.id)}
                      href={category.href}
                      className={
                        selected === category.id
                          ? 'cursor-pointer text-[#1D1D1D] w-max font-sand text-[17px] font-[600] rounded-full py-2 px-4 bg-[#EBEAE4]'
                          : 'cursor-pointer text-[#1D1D1D] w-max font-sand text-[17px] font-[500]'
                      }
                    >
                      {category.name}
                    </Link>
                  </div>
                ))}
              </ul>

              <ul className='flex gap-4 items-center custom_compSection'>
                <p className='text-[#1D1D1D] text-[18px] font-sand font-[600]'>
                  Compatibility
                </p>
                {compatibilityList.map((comp) => (
                  <div
                    onClick={() => setActive(comp.id)}
                    className=''
                    key={comp.id}
                  >
                    <p
                      className={
                        active === comp.id
                          ? 'cursor-pointer text-[#1D1D1D] font-sand text-[17px] font-[600] rounded-full py-2 px-4 bg-[#EBEAE4]'
                          : 'cursor-pointer text-[#1D1D1D] font-sand text-[17px] font-[500]'
                      }
                    >
                      {comp.name}
                    </p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
