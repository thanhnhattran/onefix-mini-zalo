import { ReactNode } from "react";

interface RemoteDiagnosisItemProps {
  icon: string;
  title: string;
  subtitle: string;
  maxWidth?: string;
}

export default function RemoteDiagnosisItem({
  icon,
  title,
  subtitle,
  maxWidth = "68px",
}: RemoteDiagnosisItemProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-3">
      <div className="flex items-center pr-[11px]">
        <div className="flex items-center justify-center gap-2">
          <div className="h-10 w-10">
            <img src={icon} />
          </div>
          <div
            className={`flex flex-grow flex-col items-start gap-1.5 self-stretch [max-width:${maxWidth}]`}
          >
            <div className="self-stretch text-[15px] font-medium text-neutral-800">
              {title}
            </div>
            <div className="text-xs text-neutral-400">{subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
