import { useAtomValue } from 'jotai';
import DoctorItem from '../items/doctor';
import { doctorsState } from '@/state';
import { Doctor } from '@/types';
import CheckIcon from '../icons/check';
import { startViewTransition } from '@/utils/miscellaneous';

export interface DoctorSelectorProps {
  value?: Doctor;
  onChange: (value: Doctor) => void;
}

function DoctorSelector({ value, onChange }: DoctorSelectorProps) {
  const doctors = useAtomValue(doctorsState);
  return (
    <div className="flex flex-col gap-6 bg-white mt-3 p-4">
      {doctors.map((doctor, index) => (
        <DoctorItem
          key={index}
          doctor={doctor}
          onClick={() => {
            if (doctor.isAvailable) {
              startViewTransition(() => {
                onChange(doctor);
              });
            }
          }}
          suffix={
            <button
              disabled={!doctor.isAvailable}
              className={`flex items-center justify-center rounded-full flex-none basis-14 h-7 border border-primary disabled:bg-[#F6F8FC] disabled:text-[#CCCCCC]  disabled:border-none ${value === doctor ? 'bg-primary' : 'text-primary'}`}
            >
              {value === doctor ? (
                <CheckIcon className="h-4 w-4" />
              ) : (
                <span className="text-xs">{doctor.isAvailable ? 'Chọn' : 'Bận'}</span>
              )}
            </button>
          }
        />
      ))}
    </div>
  );
}

export default DoctorSelector;
