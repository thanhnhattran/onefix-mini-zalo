import MenuItem from "../../components/menu-item";
import hospital from "@/static/hospital.svg";
import lung from "@/static/lung.svg";
import prescription from "@/static/prescription.svg";
import invoice from "@/static/invoice.svg";
import all from "@/static/all.svg";

export default function MenuGrid() {
  return (
    <div className="grid grid-cols-5 items-center justify-center text-center text-xs text-neutral-800">
      <MenuItem icon={hospital} label="Tư vấn" />
      <MenuItem icon={lung} label="Danh mục" />
      <MenuItem icon={prescription} label="Toa thuốc" />
      <MenuItem icon={invoice} label="Hóa đơn" />
      <MenuItem icon={all} label="Tất cả" />
    </div>
  );
} 