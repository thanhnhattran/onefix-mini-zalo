import { useMemo, useState } from "react";
import ChevronDownIcon from "../icons/chevron-down";
import { TimeSlot } from "@/types";
import { formatDayName, formatShortDate, formatTimeSlot } from "@/utils/format";

export interface SelectedSlot {
  date?: Date;
  hour?: number;
  half?: boolean;
}

export interface DateTimePickerProps {
  value?: SelectedSlot;
  onChange: (value: SelectedSlot) => void;
  slots: TimeSlot[];
}

function DateTimePicker({ value, onChange, slots }: DateTimePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    value?.date
  );
  const [selectedTime, setSelectedTime] = useState<
    { hour: number; half?: boolean; isAvailable: boolean } | undefined
  >(undefined);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsExpanded(true);
    if (selectedTime) {
      onChange({
        date,
        ...selectedTime,
      });
    } else {
      onChange({ date });
    }
  };

  const handleTimeSelect = (time: {
    hour: number;
    half?: boolean;
    isAvailable: boolean;
  }) => {
    if (!time.isAvailable) return;
    setSelectedTime(time);
    onChange({
      date: selectedDate,
      hour: time.hour,
      half: time.half,
    });
  };

  const toggleExpand = () => {
    if (!isExpanded && !selectedDate && slots.length > 0) {
      handleDateSelect(slots[0].date);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  const timeSlots = useMemo(() => {
    const dateSlot = slots.find(
      (slot) => slot.date.toDateString() === selectedDate?.toDateString()
    );
    return dateSlot?.slots || [];
  }, [slots, selectedDate]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-[5px] px-4 overflow-x-auto">
        {slots.map(({ date }, index) => {
          const dayName = formatDayName(date);
          const shortDate = formatShortDate(date);
          const isSelected =
            selectedDate?.toDateString() === date.toDateString();

          return (
            <button
              type="button"
              key={index}
              onClick={() => handleDateSelect(date)}
              className={`flex flex-none basis-16 flex-col justify-center items-center gap-2 px-1 py-2.5 font-medium relative ${
                isSelected ? "text-primary" : ""
              }`}
            >
              {isSelected && (
                <div className="bg-primary opacity-10 absolute inset-0 rounded-lg" />
              )}
              <span className="text-center text-xs whitespace-nowrap opacity-50">
                {dayName}
              </span>
              <span className="text-center text-base">{shortDate}</span>
            </button>
          );
        })}
      </div>

      <div
        className={`grid grid-cols-4 gap-3 px-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[500px] opacity-100 pt-4" : "max-h-0 opacity-0"
        }`}
      >
        {timeSlots.map((time, timeIndex) => {
          const formattedTime = formatTimeSlot(time.hour, time.half);
          const isSelected =
            selectedTime?.hour === time.hour &&
            selectedTime?.half === time.half;

          return (
            <button
              type="button"
              key={timeIndex}
              onClick={() => handleTimeSelect(time)}
              disabled={!time.isAvailable}
              className={`flex items-center justify-center rounded-3xl p-[7.5px] text-center ${
                isSelected
                  ? "bg-primary text-white"
                  : "bg-slate-50 text-neutral-700"
              } ${!time.isAvailable ? "opacity-25 cursor-not-allowed" : ""}`}
            >
              {formattedTime}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={toggleExpand}
        className="flex justify-center items-center h-12"
      >
        <ChevronDownIcon
          className={`transition-transform duration-300 ${isExpanded ? "" : "rotate-180"}`}
        />
      </button>
    </div>
  );
}

export default DateTimePicker;
