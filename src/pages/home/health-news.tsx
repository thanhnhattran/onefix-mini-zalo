import Section from "@/components/section";
import TransitionLink from "@/components/transition-link";
import newsThumbnail from "@/static/news.png";

export function NewsItem() {
  return (
    <TransitionLink
      to="/booking"
      className="flex w-full justify-between items-center gap-4 rounded-lg bg-white p-4"
    >
      <div className="flex-1 space-y-2">
        <h3 className="text-xs font-medium">
          Tiêu thụ đường vượt mức cho phép của tổ chức WHO
        </h3>
        <p className="text-xs text-disabled line-clamp-1">
          Cục An toàn thực phẩm đề nghị Viện Dinh dưỡng quốc gia, Sở Y tế Đồng
          Nai kiểm tra
        </p>
        <div className="flex justify-between text-xs text-disabled pt-2">
          <span>Sức khỏe</span>
          <span>20/05/2025</span>
        </div>
      </div>
      <img src={newsThumbnail} className="h-20 w-20" alt="News thumbnail" />
    </TransitionLink>
  );
}

export default function HealthNews() {
  return (
    <Section
      className="py-4 space-y-3"
      title="Tin tức sức khỏe"
      viewMore="/explore"
    >
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </Section>
  );
}
