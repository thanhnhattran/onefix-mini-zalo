import { ReactNode } from "react";

interface MenuItemProps {
  icon: string;
  label: string;
  className?: string;
}

export default function MenuItem({
  icon,
  label,
  className = "",
}: MenuItemProps) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div className="h-9 w-9 text-center">
        <img src={icon} alt={label} />
      </div>
      <div className="text-center">{label}</div>
    </div>
  );
}
