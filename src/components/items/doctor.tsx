import { HTMLProps, ReactNode } from 'react';
import CheckIcon from '../icons/check';

interface DoctorItemProps extends HTMLProps<HTMLDivElement> {
  doctor: {
    name: string;
    title: string;
    languages: string;
    specialties: string;
    image: string;
  };
  suffix: ReactNode;
}

export default function DoctorItem({ doctor, suffix, ...props }: DoctorItemProps) {
  return (
    <div className="flex flex-grow items-center justify-center gap-4 cursor-pointer" {...props}>
      <div className="flex flex-grow justify-center gap-2.5 self-stretch overflow-hidden">
        <div className="h-14 w-14 flex-none">
          <img src={doctor.image} alt={doctor.name} />
        </div>
        <div className="font-roboto flex flex-grow flex-col gap-1 text-xs text-neutral-400 overflow-hidden">
          <div className="flex items-center gap-1.5 truncate">
            <div className="text-[15px] font-medium text-neutral-900">{doctor.name}</div>
            <div className="w-28">{doctor.title}</div>
          </div>
          <div>{doctor.languages}</div>
          <div className="pt-1">
            <div className="flex items-center">
              <p>{doctor.specialties}</p>
            </div>
          </div>
        </div>
      </div>
      {suffix}
    </div>
  );
}
