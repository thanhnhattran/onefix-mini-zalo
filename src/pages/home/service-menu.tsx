import hospital from "@/static/services/hospital.svg";
import lung from "@/static/services/lung.svg";
import prescription from "@/static/services/prescription.svg";
import invoice from "@/static/services/invoice.svg";
import all from "@/static/services/all.svg";
import ServiceItem from "@/components/items/service";

export default function ServiceMenu() {
  return (
    <div className="grid grid-cols-5 items-center justify-center text-center text-xs text-neutral-800">
      <ServiceItem icon={hospital} label="Tư vấn" />
      <ServiceItem to="/categories" icon={lung} label="Danh mục" />
      <ServiceItem icon={prescription} label="Toa thuốc" />
      <ServiceItem icon={invoice} label="Hóa đơn" />
      <ServiceItem to="/services" icon={all} label="Tất cả" />
    </div>
  );
}
