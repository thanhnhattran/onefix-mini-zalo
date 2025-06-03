import exploreKidHeight from "@/static/explore/explore-kid-height.png";
import exploreBeach from "@/static/explore/explore-beach.png";
import exploreScientist from "@/static/explore/explore-scientist.png";
import exploreRoom from "@/static/explore/explore-room.png";
import exploreDishes from "@/static/explore/explore-dishes.png";
import exploreOmega3 from "@/static/explore/explore-omega-3.png";

interface ExploreItemProps {
  title: string;
  category: string;
  timeAgo: string;
  image: string;
}

const exploreItems: ExploreItemProps[] = [
  {
    title:
      "Tăng chiều cao, sức bền cho trẻ em - Kỳ 2: Làm gì để thanh niên cao hơn, khỏe hơn?",
    category: "Sức khỏe",
    timeAgo: "2 tháng trước",
    image: exploreKidHeight,
  },
  {
    title: "Khám phá bãi biển đẹp nhất Việt Nam",
    category: "Du lịch",
    timeAgo: "1 tuần trước",
    image: exploreBeach,
  },
  {
    title: "Những phát minh khoa học mới nhất năm 2024",
    category: "Khoa học",
    timeAgo: "3 ngày trước",
    image: exploreScientist,
  },
  {
    title: "Thiết kế phòng ngủ hiện đại cho gia đình",
    category: "Nhà cửa",
    timeAgo: "5 ngày trước",
    image: exploreRoom,
  },
  {
    title: "Công thức nấu ăn ngon cho cả gia đình",
    category: "Ẩm thực",
    timeAgo: "1 ngày trước",
    image: exploreDishes,
  },
  {
    title: "Lợi ích của Omega-3 cho sức khỏe",
    category: "Dinh dưỡng",
    timeAgo: "4 ngày trước",
    image: exploreOmega3,
  },
];

export function ExploreItem({
  title,
  category,
  timeAgo,
  image,
}: ExploreItemProps) {
  return (
    <div className="flex flex-grow items-center justify-center space-x-6">
      <div className="font-roboto flex flex-grow flex-col items-start gap-3">
        <div className="line-clamp-2 flex items-start self-stretch overflow-ellipsis text-sm font-medium text-neutral-900">
          <p className="line-clamp-2">{title}</p>
        </div>
        <div className="w-full flex items-center justify-between text-xs">
          <div className="rounded-lg bg-teal-500/10 px-2 text-center text-neutral-700 whitespace-nowrap">
            {category}
          </div>
          <div className="text-neutral-400 whitespace-nowrap">{timeAgo}</div>
        </div>
      </div>
      <div className="h-[76px] w-[106px] flex-none">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
}

export { exploreItems };
