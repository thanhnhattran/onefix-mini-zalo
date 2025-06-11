import { Article } from "@/types";

export function ArticleItem({ title, category, timeAgo, image }: Article) {
  return (
    <div className="flex flex-grow items-center justify-center space-x-6">
      <div className="font-roboto flex flex-grow flex-col items-start gap-3">
        <div className="line-clamp-2 flex items-start self-stretch overflow-ellipsis text-sm font-medium text-disabled">
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
