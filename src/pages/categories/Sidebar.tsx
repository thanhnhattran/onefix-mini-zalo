import { departmentsState } from '@/state';
import { useAtomValue } from 'jotai';
import { useState } from 'react';

export default function Sidebar() {
  const categories = useAtomValue(departmentsState);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  return (
    <div className="basis-28 bg-background rounded-tr-[16px] flex flex-col gap-8 py-5 px-3 text-center text-sm text-[dimgray] overflow-y-auto overflow-x-hidden">
      {categories.map((category, index) => (
        <div
          key={category.id}
          className={`flex-none rounded-[14px] px-2 py-1.5 line-clamp-2 cursor-pointer ${
            selectedCategoryIndex === index ? 'bg-teal-500 text-white font-medium' : ''
          }`}
          onClick={() => {
            setSelectedCategoryIndex(index);
            document
              .getElementById('department-header-' + category.id)
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
}
