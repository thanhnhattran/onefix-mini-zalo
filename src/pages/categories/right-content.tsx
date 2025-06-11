import DepartmentItem from "@/components/items/department";
import { departmentGroupsState, departmentsState } from "@/state";
import { toLowerCaseNonAccentVietnamese } from "@/utils/miscellaneous";
import { useAtomValue } from "jotai";

interface RightContentProps {
  keyword: string;
}

export default function RightContent({ keyword }: RightContentProps) {
  const groups = useAtomValue(departmentGroupsState);
  const departments = useAtomValue(departmentsState);
  const normalizedKeyword = toLowerCaseNonAccentVietnamese(keyword);

  const filteredDepartments = departments.filter((dep) =>
    toLowerCaseNonAccentVietnamese(dep.name).includes(normalizedKeyword)
  );

  return (
    <div className="flex-1 flex flex-col overflow-y-auto px-4 pb-5 space-y-5">
      {groups.map((group) => (
        <div key={group.id} className="flex flex-col space-y-3">
          <h2
            className="text-base font-medium text-neutral-800"
            id={`department-header-${group.id}`}
          >
            {group.name}
          </h2>
          <div className="grid grid-cols-2 gap-[9px]">
            {filteredDepartments
              .filter(({ groupId }) => group.id === groupId)
              .map((dep, i) => (
                <DepartmentItem key={i} item={dep} className="bg-slate-50" />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
