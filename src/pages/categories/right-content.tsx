import DepartmentItem from '@/components/items/department';
import { departmentsState } from '@/state';
import { useAtomValue } from 'jotai';

interface RightContentProps {
  keyword: string;
}

export default function RightContent({ keyword }: RightContentProps) {
  const departments = useAtomValue(departmentsState);

  const filteredDepartments = departments.filter(
    dep =>
      dep.name.toLowerCase().includes(keyword.toLowerCase()) ||
      dep.subDepartments.some(sub => sub.toLowerCase().includes(keyword.toLowerCase()))
  );

  return (
    <div className="flex-1 flex flex-col overflow-y-auto px-4 pb-5 space-y-5">
      {filteredDepartments.map(dep => (
        <div key={dep.id} className="flex flex-col space-y-3">
          <h2
            className="text-[15px] font-medium text-neutral-800"
            id={`department-header-${dep.id}`}
          >
            {dep.name}
          </h2>
          <div className="grid grid-cols-2 gap-[9px]">
            {dep.subDepartments
              .filter(sub => sub.toLowerCase().includes(keyword.toLowerCase()))
              .map((sub, i) => (
                <DepartmentItem
                  key={i}
                  item={{
                    name: sub,
                    description: 'Mô tả ngắn gọn',
                  }}
                  className="bg-slate-50"
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
