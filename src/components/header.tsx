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
import headerIllus from "@/static/header-illus.svg";
import { servicesState, userState } from "@/state";
import { getConfig } from "@/utils/miscellaneous";

function ProfileHeader() {
  const { userInfo } = useAtomValue(userState);

  return (
    <div className="flex items-center justify-center space-x-3">
      <img
        src={userInfo.avatar}
        className="rounded-full h-10 w-10 object-cover border border-white"
      />
      <div className="w-40 font-medium text-disabled">{userInfo.name}</div>
    </div>
  );
}

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [handle, match] = useRouteHandle();
  const services = useAtomValue(servicesState);

  const title = useMemo(() => {
    if (handle) {
      if (typeof handle.title === "function") {
        return handle.title({ params: match.params, services: services });
      } else {
        return handle.title;
      }
    }
  }, [handle]);

  const showBack = location.key !== "default" && handle?.back !== false;

  return (
    <header
      className="flex-none w-full bg-white min-h-12 pr-[90px] px-4 pt-st pb-2 space-x-2 bg-no-repeat bg-right-top"
      style={{
        backgroundImage: `url(${headerIllus})`,
      }}
    >
      <div className="flex items-center min-h-12">
        {!handle?.back ? (
          <>
            <div
              className="fixed inset-0 h-[230px] z-0"
              style={{
                background:
                  "linear-gradient(160deg, #8DE9F2 1.36%, #F2F9F9 61.49%)",
              }}
            />
            <div className="relative z-10">
              {handle.profile ? (
                <ProfileHeader />
              ) : (
                <div className="flex items-center text-primary space-x-1.5">
                  <h1 className="text-xl font-bold">
                    {getConfig((c) => c.app.title)}
                  </h1>
                  <span>|</span>
                  <span className="text-base">Chào bạn</span>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {showBack && (
              <div
                className="py-1 px-2 cursor-pointer"
                onClick={() => navigate(-1)}
              >
                <BackIcon />
              </div>
            )}
            <div className="text-xl font-medium truncate">{title}</div>
          </>
        )}
      </div>
    </header>
  );
}
