import TransitionLink from "./transition-link";
import { To } from "react-router-dom";

interface ServiceItemProps {
  icon: string;
  label: string;
  className?: string;
  to: To;
}

export default function ServiceItem({
  icon,
  label,
  className = "",
  to,
}: ServiceItemProps) {
  return (
    <TransitionLink
      to={to}
      className={`flex flex-col items-center gap-1 ${className}`}
    >
      <div className="h-9 w-9 text-center">
        <img src={icon} alt={label} />
      </div>
      <div className="text-center w-full truncate">{label}</div>
    </TransitionLink>
  );
}
