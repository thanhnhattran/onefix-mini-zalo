import { To } from "react-router-dom";
import TransitionLink from "../transition-link";

interface Link {
  to: To;
}

interface CTA {
  onClick: () => void;
}

interface ServiceItemProps {
  icon: string;
  label: string;
  className?: string;
}

export default function ServiceItem({
  icon,
  label,
  className = "",
  ...props
}: ServiceItemProps & (Link | CTA)) {
  const children = (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div className="h-9 w-9 text-center">
        <img src={icon} alt={label} />
      </div>
      <div className="text-center w-full truncate">{label}</div>
    </div>
  );
  if ("to" in props) {
    return <TransitionLink to={props.to}>{children}</TransitionLink>;
  }

  return <button onClick={props.onClick}>{children}</button>;
}
