import { bookingFormState } from "@/state";
import { Department } from "@/types";
import { useSetAtom } from "jotai";
import { HTMLProps } from "react";
import { useNavigate } from "react-router-dom";

interface DepartmentItemProps extends HTMLProps<HTMLButtonElement> {
  item: Department;
}

function DepartmentItem({ item, className, ...props }: DepartmentItemProps) {
  const navigate = useNavigate();
  const setBookingData = useSetAtom(bookingFormState);

  return (
    <button
      onClick={() => {
        setBookingData((prev) => ({
          ...prev,
          department: item,
        }));
        navigate("/booking");
      }}
      {...props}
      type="button"
      className={`flex flex-col gap-2 rounded-lg p-2.5 pr-[22px] ${className ?? ""}`}
    >
      <div className="text-sm font-medium text-neutral-800">{item.name}</div>
      <div className="text-xs text-neutral-400 w-full truncate">
        {item.description}
      </div>
    </button>
  );
}

export default DepartmentItem;
