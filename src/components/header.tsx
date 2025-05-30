import { useAtomValue } from "jotai";
import {
  UIMatch,
  useLocation,
  useMatches,
  useNavigate,
} from "react-router-dom";
import { useMemo } from "react";
import { useRouteHandle } from "@/hooks";
import { BackIcon } from "./icons/back";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [handle, match] = useRouteHandle();

  const title = useMemo(() => {
    if (handle) {
      if (typeof handle.title === "function") {
        return handle.title({ params: match.params });
      } else {
        return handle.title;
      }
    }
  }, [handle]);

  const showBack = location.key !== "default" && handle?.back !== false;

  if (handle?.logo) {
    return (
      <header className="flex flex-col gap-3 bg-cover bg-center pb-5 px-4 mt-10">
        <div className="flex items-center text-primary space-x-1.5">
          <h1 className="text-[17px] font-bold">Hiag Bình Thạnh</h1>
          <span>|</span>
          <span className="text-[15px]">Chào bạn</span>
        </div>
      </header>
    );
  }

  return (
    <div className="h-12 w-full flex items-center pl-2 pr-[106px] py-2 space-x-1">
      {showBack && (
        <div className="p-2 cursor-pointer" onClick={() => navigate(-1)}>
          <BackIcon />
        </div>
      )}
      <div className="text-xl font-medium truncate">{title}</div>
    </div>
  );
}
