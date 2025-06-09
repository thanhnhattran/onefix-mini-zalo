import { HTMLProps } from 'react';

interface DepartmentItemProps extends HTMLProps<HTMLDivElement> {
  item: { name: string; description: string };
}

function DepartmentItem({ item: { name, description }, className, ...props }: DepartmentItemProps) {
  return (
    <div className={`flex flex-col gap-2 rounded-lg p-2.5 pr-[22px] ${className ?? ''}`} {...props}>
      <div className="text-sm font-medium text-neutral-800">{name}</div>
      <div className="text-xs text-neutral-400 truncate">{description}</div>
    </div>
  );
}

export default DepartmentItem;
