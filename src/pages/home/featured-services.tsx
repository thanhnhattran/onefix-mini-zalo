import ArrowRightIcon from "@/components/icons/arrow-right";
import ServiceHighlight from "./service-highlight";
import xoaCan from "@/static/doctor-xoa-can.png";
import triNam from "@/static/doctor-tri-nam.png";
import giamCan from "@/static/doctor-giam-can.png";
import Section from "@/components/section";

export default function FeaturedServices() {
  return (
    <Section
      className="pt-5"
      title="Dịch vụ nổi bật"
      viewMore="/services"
      isCard
    >
      <div className="grid grid-cols-2 gap-2.5">
        <div className="relative flex flex-col items-start gap-1 bg-cover bg-center">
          <ServiceHighlight
            title="Giảm cân"
            subtitle="Làm đẹp"
            to="/service/1"
            cta={
              <button
                className="mt-2 flex w-fit items-center justify-center rounded-full px-1.5 py-0.5"
                style={{
                  background: "linear-gradient(89deg, #286bab, #77acdf)",
                }}
              >
                <span className="text-4xs text-white">XEM</span>
                <ArrowRightIcon width={10} height={10} color="white" />
              </button>
            }
            background="linear-gradient(132deg, #F3F9FF 1.29%, #E2EEFF 96.9%)"
            color="#286BAB"
            image={giamCan}
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <ServiceHighlight
            title="Xóa cận"
            to="/service/2"
            subtitle="Nhãn khoa"
            color="#0F777D"
            background="linear-gradient(145deg, #BBFCFE 1.2%, #8CF5F9 95.96%)"
            image={xoaCan}
          />
          <ServiceHighlight
            title="Trị nám"
            to="/service/3"
            subtitle="Da liễu"
            color="#D9861C"
            background="linear-gradient(145deg, #FFE2B0 1.2%, #FFF9E7 95.96%)"
            image={triNam}
          />
        </div>
      </div>
    </Section>
  );
}
