import { Doctor } from '@/types';

interface VisitedDoctorProps {
  doctor: Doctor;
}

export function VisitedDoctor({ doctor }: VisitedDoctorProps) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
      <img src={doctor.image} className="w-10 h-10 rounded-full object-cover" />
      <div className="flex flex-grow flex-col gap-[7px] [max-width:90px]">
        <div className="text-sm font-medium text-neutral-900">Lưu</div>
        <div className="flex items-start">
          <p>Khoa Tai Mũi Họng</p>
        </div>
      </div>
    </div>
  );
}
