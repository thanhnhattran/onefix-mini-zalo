import ArrowRightIcon from "@/components/icons/arrow-right";
import ServiceHighlight from "./service-highlight";
import xoaCan from "@/static/service-xoa-can.png";
import triNam from "@/static/service-tri-nam.png";
import giamCan from "@/static/service-giam-can.png";
import Section from "@/components/section";

export default function FeaturedServices() {
  return (
    <Section className="pt-5" title="Dịch vụ nổi bật" viewMore isCard>
      <div className="grid grid-cols-2 gap-2.5">
        <div className="relative flex h-36 flex-col items-start gap-1 bg-cover bg-center">
          <ServiceHighlight
            title="Giảm cân"
            subtitle="Làm đẹp"
            cta={
              <button
                className="mt-2 flex w-fit items-center justify-center rounded-full px-1.5 py-0.5"
                style={{
                  background: "linear-gradient(89deg, #286bab, #77acdf)",
                }}
              >
                <span className="text-[10px] text-white">XEM</span>
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
            subtitle="Nhãn khoa"
            color="#0F777D"
            background="linear-gradient(145deg, #BBFCFE 1.2%, #8CF5F9 95.96%)"
            image={xoaCan}
          />
          <ServiceHighlight
            title="Trị nám"
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
