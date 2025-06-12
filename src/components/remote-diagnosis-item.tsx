import { ReactNode } from "react";

interface RemoteDiagnosisItemProps {
  icon: ReactNode;
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
    <div className="flex flex-col justify-center rounded-lg bg-background p-3">
      <div className="flex items-center pr-3">
        <div className="flex items-center justify-center gap-2">
          <div className="h-10 w-10">{icon}</div>
          <div className="flex flex-grow flex-col items-start gap-1.5 self-stretch">
            <div className="self-stretch text-base font-medium">{title}</div>
            <div className="text-xs text-disabled">{subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
