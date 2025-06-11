import DoctorItem from "@/components/items/doctor";
import TransitionLink from "@/components/transition-link";
import { Booking } from "@/types";
import { formatShortDate, formatTimeSlot } from "@/utils/format";

export interface ScheduleItemProps {
  schedule: Booking;
}

export function ScheduleItem({ schedule }: ScheduleItemProps) {
  return (
    <TransitionLink
      to={`/schedule/${schedule.id}`}
      className="font-roboto flex w-full flex-col gap-3 rounded-xl bg-white p-4"
    >
      <div className="flex items-center justify-between gap-11 font-medium">
        <div className="text-base text-disabled">
          {schedule.department.name}
        </div>
        <div className="text-xs text-teal-500">{schedule.status}</div>
      </div>
      <hr className="border-t border-black/10" />
      <DoctorItem doctor={schedule.doctor} />
      <div className="text-sm text-neutral-950">
        <span>
          <p>Thông tin khám {schedule.patientName}</p>
          <p>
            <span className="whitespace-pre-wrap"> </span>
          </p>
          <p>{formatTimeSlot(schedule.schedule.time)}</p>
          <p>{formatShortDate(schedule.schedule.date)}</p>
        </span>
      </div>
      <div className="flex items-center justify-end gap-[5px] pt-1 text-center text-xs">
        <div className="rounded-md bg-slate-50 px-2 py-1.5 text-disabled">
          Chat với bác sĩ
        </div>
        <div className="rounded-md bg-emerald-500/10 px-2 py-1.5 text-primary">
          Xem chi tiết
        </div>
      </div>
    </TransitionLink>
  );
}
