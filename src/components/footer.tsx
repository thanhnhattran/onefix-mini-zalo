import HorizontalDivider from './horizontal-divider';
import { useAtomValue } from 'jotai';
import TransitionLink from './transition-link';
import HomeIcon from './icons/home';
import CategoryIcon from './icons/category';
import ChatIcon from './icons/cart';
import ProfileIcon from './icons/profile';
import BigPlusIcon from './icons/big-plus';
import { useRouteHandle } from '@/hooks';

const NAV_ITEMS = [
  {
    name: 'Trang chủ',
    path: '/',
    icon: HomeIcon,
  },
  {
    name: 'Khám phá',
    path: '/explore',
    icon: CategoryIcon,
  },
  {
    path: '/booking',
    icon: () => <BigPlusIcon className="-mt-3" />,
  },
  {
    name: 'Tư vấn',
    path: '/chat',
    icon: ChatIcon,
  },
  {
    name: 'Cá nhân',
    path: '/profile',
    icon: ProfileIcon,
  },
];

export default function Footer() {
  const [handle] = useRouteHandle();
  if (handle.back) {
    return <></>;
  }

  return (
    <div className="w-full relative">
      <svg
        className="absolute inset-x-0 bottom-0 z-10 h-24"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 375 99"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M375 99V16H244.44C231.46 16 225.56 14.95 215.57 9.98C215.57 9.98 200.59 0 188.3 0C176.01 0 170.91 3.96 159.19 9.98C147.47 16 129.64 16 129.64 16H0V99H375Z"
          fill="white"
        />
      </svg>
      <div
        className="w-full px-4 pt-2 grid text-[11px] relative z-20"
        style={{
          gridTemplateColumns: `repeat(${NAV_ITEMS.length}, 1fr)`,
          paddingBottom: `max(16px, env(safe-area-inset-bottom))`,
        }}
      >
        {NAV_ITEMS.map(item => {
          return (
            <TransitionLink
              to={item.path}
              key={item.path}
              className="flex flex-col items-center space-y-0.5 p-1 pb-2.5 cursor-pointer active:scale-105"
            >
              {({ isActive }) =>
                item.name ? (
                  <>
                    <div className="w-6 h-6 flex justify-center items-center">
                      <item.icon active={isActive} />
                    </div>
                    <div className={`text-2xs ${isActive ? 'text-primary' : 'text-[lightgray]'}`}>
                      {item.name}
                    </div>
                  </>
                ) : (
                  <item.icon active={isActive} />
                )
              }
            </TransitionLink>
          );
        })}
      </div>
    </div>
  );
}
