import {
  Doctor,
  Booking,
  Service,
  TimeSlot,
  Invoice,
  Department,
  Article,
  DepartmentGroup,
  AvailableTimeSlots,
} from "@/types";
import TeddyNH from "@/static/doctors/teddynh.png";
import DinhLD from "@/static/doctors/dinhld.png";
import XungTD from "@/static/doctors/xungtd.png";
import TranHT from "@/static/doctors/tranht.png";
import WilsonJ from "@/static/doctors/wilsonj.png";
import HiddlestonT from "@/static/doctors/hiddlestont.png";
import ViDN from "@/static/doctors/vidn.png";
import exploreKidHeight from "@/static/explore/explore-kid-height.png";
import exploreBeach from "@/static/explore/explore-beach.png";
import exploreScientist from "@/static/explore/explore-scientist.png";
import exploreRoom from "@/static/explore/explore-room.png";
import exploreDishes from "@/static/explore/explore-dishes.png";
import exploreOmega3 from "@/static/explore/explore-omega-3.png";

export function mock7DaysTimeSlots(): AvailableTimeSlots[] {
  const START_HOUR = 8;
  const END_HOUR = 21;

  const slots: AvailableTimeSlots[] = [];
  const today = new Date();

  const generateSlots = (date: Date) => {
    const slots: AvailableTimeSlots["slots"][number][] = [];
    const currentDate = new Date();
    const isToday = date.toDateString() === currentDate.toDateString();
    const startHour = isToday
      ? Math.max(START_HOUR, new Date().getHours() + 1)
      : START_HOUR; // Start from 8 AM if not today

    for (let hour = startHour; hour < END_HOUR; hour++) {
      // Full hour slot
      slots.push({
        hour,
        isAvailable: Math.random() > 0.3,
      });

      // Half hour slot
      slots.push({
        hour,
        half: true,
        isAvailable: Math.random() > 0.3,
      });
    }

    return slots;
  };

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    slots.push({
      date,
      slots: generateSlots(date),
    });
  }

  return slots;
}

export function mockDoctors(): Doctor[] {
  return [
    {
      id: 1,
      name: "Dương Nhất Vĩ",
      title: "Phó Trưởng Khoa",
      languages: "Tiếng Trung, English",
      specialties: "Thần Kinh Nội Khoa, Chóng Mặt, Đau Đầu Chuyên Khoa",
      image: ViDN,
      isAvailable: Math.random() > 0.3,
    },
    {
      id: 2,
      name: "Lý Đa Đình",
      title: "Trưởng Khoa",
      languages: "Tiếng Trung, English, 한국어",
      specialties: "Nội Khoa, Bệnh Gan",
      image: DinhLD,
      isAvailable: Math.random() > 0.3,
    },
    {
      id: 3,
      name: "Trương Đình Xưng",
      title: "Trưởng Khoa",
      languages: "Tiếng Trung, English",
      specialties: "Nội Khoa, Bệnh Gan",
      image: XungTD,
      isAvailable: Math.random() > 0.3,
    },
    {
      id: 4,
      name: "Hồng Tự Trấn",
      title: "Trưởng Khoa",
      languages: "Tiếng Trung, English, 한국어",
      specialties: "Nội Khoa, Bệnh Gan",
      image: TranHT,
      isAvailable: Math.random() > 0.3,
    },
    {
      id: 5,
      name: "John Wilson",
      title: "MD",
      languages: "Tiếng Trung, English",
      specialties: "Nội Khoa, Bệnh Gan",
      image: WilsonJ,
      isAvailable: Math.random() > 0.3,
    },
    {
      id: 6,
      name: "Tom Hiddleston",
      title: "MD",
      languages: "Tiếng Trung, English, 한국어",
      specialties: "Nội Khoa, Bệnh Gan",
      image: HiddlestonT,
      isAvailable: Math.random() > 0.3,
    },
    {
      id: 7,
      name: "TeddyNH",
      title: "Trưởng Khoa",
      languages: "Tiếng Trung, English, 한국어",
      specialties: "Nội Khoa, Bệnh Gan",
      image: TeddyNH,
      isAvailable: Math.random() > 0.3,
    },
  ];
}

export function mockServices(): Service[] {
  const [d1, d2] = mockDepartments();
  const genDesc = (imageUrl) =>
    `<div class="font-roboto flex w-full flex-col gap-4 px-4 pt-4 text-sm text-neutral-950 "><div class="flex items-start text-base font-medium text-disabled"><p>Khoa nội khoa tổng quát đã được chứng nhận chất lượng bởi tổ chức gia đình bác sĩ thế giới WONCA</p></div><div class="flex items-start"><p>Bệnh nội khoa, tổng quát bao gồm rất nhiều bệnh lý thuộc các chuyên ngành y khác nhau, chủ yếu được điều trị bằng thuốc kết hợp các thủ thuật nhỏ (nếu có) và thay đổi lối sống, chế độ dinh dưỡng, nghỉ ngơi, vận động khoa học.</p></div><img class="rounded-lg" src="${imageUrl}" /><div class="h-56"><span><p class="mb-[5px]">Khám nội tổng quát (hay khám nội khoa) hay khám sức khỏe nội tổng quát là cách hiệu quả để mỗi người chủ động phát hiện bệnh kịp thời và điều trị bệnh từ sớm. Quy trình thăm khám nội tổng quát thường bao gồm:</p><div class="mb-[5px] h-5"></div><p class="mb-[5px]">Kiểm tra cơ bản: Bao gồm việc kiểm tra cân nặng, chiều cao, đo huyết áp… Các thông số này có thể cung cấp những thông tin quan trọng về tình trạng sức khỏe cơ bản của cơ thể.</p><p class="mb-[5px]">Khám lâm sàng (nội hô hấp, tiêu hóa, nội tiết, thần kinh, cơ xương khớp, tai mũi họng, răng hàm mặt…): Thông qua việc khám lâm sàng, bác sĩ có thể đánh giá ban đầu tình trạng sức khỏe, bệnh lý của người bệnh..</p><p class="mb-[5px]">Xét nghiệm, chụp chiếu: Sau khám lâm sàng, bác sĩ có thể chỉ định người bệnh thực hiện các cận lâm sàng chuyên sâu như xét nghiệm máu, xét nghiệm nước tiểu, siêu âm bụng, siêu âm tim, siêu âm tổng quát, chụp X-quang, chụp CT, chụp MRI, siêu âm… để tầm soát, đánh giá, phát hiện các bệnh lý liên quan, kể cả ung thư.</p><p>Lưu ý, quy trình ở trên chỉ mang tính tham khảo. Tùy mỗi bệnh lý hay tùy tại mỗi cơ sở y tế, danh mục khám nội tổng quát, quy trình sẽ được xây dựng khác nhau và còn thay đổi.</p></span></div></div>`;

  return [
    {
      id: 1,
      name: "Điều trị giảm cân",
      description: genDesc(exploreDishes),
      image: exploreDishes,
      price: 100000,
      department: d1,
    },
    {
      id: 2,
      name: "Xoá cận",
      description: genDesc(exploreKidHeight),
      image: exploreKidHeight,
      price: 100000,
      department: d2,
    },
    {
      id: 3,
      name: "Trị nám",
      description: genDesc(exploreOmega3),
      image: exploreOmega3,
      price: 100000,
      department: d2,
    },
  ];
}

export function mockBookings(): Booking[] {
  const [d1, d2, d3] = mockDoctors();
  const [de1, de2, de3] = mockDepartments();
  return [
    {
      id: 1,
      status: "Ngày mai",
      patientName: "Băng Đôn Đôn",
      schedule: {
        date: new Date("2025-05-14T09:00:00"),
        time: {
          hour: 9,
          half: true,
        },
      },
      doctor: d1,
      department: de1,
    },
    {
      id: 2,
      status: "Hoàn thành",
      patientName: "Băng Đôn Đôn",
      schedule: {
        date: new Date("2025-05-14T09:00:00"),
        time: {
          hour: 9,
          half: false,
        },
      },
      doctor: d2,
      department: de2,
    },
    {
      id: 3,
      status: "Hoàn thành",
      patientName: "Băng Đôn Đôn",
      schedule: {
        date: new Date("2025-05-14T09:00:00"),
        time: {
          hour: 13,
          half: true,
        },
      },
      doctor: d3,
      department: de3,
    },
  ];
}

export function mockInvoices(): Invoice[] {
  const [b1, b2] = mockBookings();
  return [
    {
      id: 1,
      booking: b1,
    },
    {
      id: 2,
      booking: b2,
    },
  ];
}

export function mockDepartmentGroups(): DepartmentGroup[] {
  const groups = [
    "Nội khoa",
    "Ngoại khoa",
    "Tim mạch",
    "Phụ khoa",
    "Sinh Sản",
    "Nhi khoa",
    "Nhãn khoa",
    "Tai mũi họng",
    "Da liễu",
    "Chỉnh hình",
  ];

  return groups.map((name, i) => ({
    id: i + 1,
    name,
    description: `Khoa ${name} đã được chứng nhận chất lượng bởi tổ chức gia đình bác sĩ thế giới WONCA.`,
  }));
}

export function mockDepartments(): Department[] {
  const groups = mockDepartmentGroups();
  let id = 0;

  return groups.reduce(
    (res, group) =>
      res.concat(
        ["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => ({
          id: ++id,
          name: `${group.name} ${letter}`,
          description: group.description,
          groupId: group.id,
        }))
      ),
    [] as Department[]
  );
}

export function mockArticles(): Article[] {
  return [
    {
      id: 1,
      title:
        "Tăng chiều cao, sức bền cho trẻ em - Kỳ 2: Làm gì để thanh niên cao hơn, khỏe hơn?",
      category: "Sức khỏe",
      timeAgo: "2 tháng trước",
      image: exploreKidHeight,
    },
    {
      id: 2,
      title: "Khám phá bãi biển đẹp nhất Việt Nam",
      category: "Du lịch",
      timeAgo: "1 tuần trước",
      image: exploreBeach,
    },
    {
      id: 3,
      title: "Những phát minh khoa học mới nhất năm 2024",
      category: "Khoa học",
      timeAgo: "3 ngày trước",
      image: exploreScientist,
    },
    {
      id: 4,
      title: "Thiết kế phòng ngủ hiện đại cho gia đình",
      category: "Nhà cửa",
      timeAgo: "5 ngày trước",
      image: exploreRoom,
    },
    {
      id: 5,
      title: "Công thức nấu ăn ngon cho cả gia đình",
      category: "Ẩm thực",
      timeAgo: "1 ngày trước",
      image: exploreDishes,
    },
    {
      id: 6,
      title: "Lợi ích của Omega-3 cho sức khỏe",
      category: "Dinh dưỡng",
      timeAgo: "4 ngày trước",
      image: exploreOmega3,
    },
  ];
}
