import { startViewTransition } from "@/utils/miscellaneous";
import React, {
  ButtonHTMLAttributes,
  FC,
  MouseEvent,
  ReactNode,
  useEffect,
  useState,
} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  appearAnimation?: boolean;
  onDisabledClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  loading,
  disabled,
  appearAnimation,
  onDisabledClick,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(!appearAnimation);

  useEffect(() => {
    if (appearAnimation) {
      // Fallback for browsers that don't support View Transitions
      if (!startViewTransition) {
        setIsVisible(true);
        return;
      }

      startViewTransition(() => {
        setIsVisible(true);
      });
    }
  }, [appearAnimation]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled && onDisabledClick) {
      onDisabledClick();
      e.preventDefault();
      return;
    }
    if (loading) {
      e.preventDefault();
      return;
    }
    props.onClick?.(e);
  };

  return (
    <button
      className={`
        bg-gradient-to-br from-primary to-highlight
        ${loading || disabled ? "grayscale cursor-not-allowed" : "shadow shadow-highlight"}
        ${className || ""}
        ${
          isVisible
            ? `flex w-full h-12 p-3 justify-center items-center text-white text-lg rounded-full active:scale-95`
            : "fixed bottom-0 left-1/2 w-full h-12 translate-y-40"
        }
      `}
      {...props}
      onClick={handleClick}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className={`${loading ? "opacity-0" : ""}`}>{children}</div>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    </button>
  );
};
