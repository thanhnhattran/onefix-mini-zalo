import TeddyNH from "@/static/doctors/teddynh.png";
import DinhLD from "@/static/doctors/dinhld.png";
import XungTD from "@/static/doctors/xungtd.png";
import TranHT from "@/static/doctors/tranht.png";
import WilsonJ from "@/static/doctors/wilsonj.png";
import HiddlestonT from "@/static/doctors/hiddlestont.png";
import ViDN from "@/static/doctors/vidn.png";

interface DoctorItemProps {
  doctor: {
    name: string;
    title: string;
    languages: string;
    specialties: string;
    image: string;
  };
}

export const DOCTORS = [
  {
    name: "Dương Nhất Vĩ",
    title: "Phó Trưởng Khoa",
    languages: "Tiếng Trung, English",
    specialties: "Thần Kinh Nội Khoa, Chóng Mặt, Đau Đầu Chuyên Khoa",
    image: ViDN,
  },
  {
    name: "Lý Đa Đình",
    title: "Trưởng Khoa",
    languages: "Tiếng Trung, English, 한국어",
    specialties: "Nội Khoa, Bệnh Gan",
    image: DinhLD,
  },
  {
    name: "Trương Đình Xưng",
    title: "Trưởng Khoa",
    languages: "Tiếng Trung, English",
    specialties: "Nội Khoa, Bệnh Gan",
    image: XungTD,
  },
  {
    name: "Hồng Tự Trấn",
    title: "Trưởng Khoa",
    languages: "Tiếng Trung, English, 한국어",
    specialties: "Nội Khoa, Bệnh Gan",
    image: TranHT,
  },
  {
    name: "John Wilson",
    title: "MD",
    languages: "Tiếng Trung, English",
    specialties: "Nội Khoa, Bệnh Gan",
    image: WilsonJ,
  },
  {
    name: "Tom Hiddleston",
    title: "MD",
    languages: "Tiếng Trung, English, 한국어",
    specialties: "Nội Khoa, Bệnh Gan",
    image: HiddlestonT,
  },
  {
    name: "TeddyNH",
    title: "Trưởng Khoa",
    languages: "Tiếng Trung, English, 한국어",
    specialties: "Nội Khoa, Bệnh Gan",
    image: TeddyNH,
  },
];

export default function DoctorItem({ doctor }: DoctorItemProps) {
  return (
    <div className="flex flex-grow items-center justify-center gap-4">
      <div className="flex flex-grow justify-center gap-2.5 self-stretch overflow-hidden">
        <div className="h-14 w-14 flex-none">
          <img src={doctor.image} alt={doctor.name} />
        </div>
        <div className="font-roboto flex flex-grow flex-col gap-1 text-xs text-neutral-400 overflow-hidden">
          <div className="flex items-center gap-1.5 truncate">
            <div className="text-[15px] font-medium text-neutral-900">
              {doctor.name}
            </div>
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
      <div className="flex items-center justify-center rounded-[30px] bg-teal-500 px-[18px] py-1.5">
        <div className="h-4 w-4">
          <svg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: "visible" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5204 4.97982C13.7156 5.17508 13.7156 5.49167 13.5204 5.68693L7.59109 11.6162C7.35678 11.8505 6.97688 11.8505 6.74257 11.6162L3.47994 8.35359C3.28468 8.15833 3.28468 7.84175 3.47994 7.64649C3.6752 7.45123 3.99179 7.45123 4.18705 7.64649L7.16683 10.6263L12.8133 4.97982C13.0085 4.78456 13.3251 4.78456 13.5204 4.97982Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
