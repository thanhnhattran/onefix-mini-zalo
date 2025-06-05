import { startViewTransition } from '@/utils/miscellaneous';
import React, { useEffect, useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  appearAnimation?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  loading,
  disabled,
  appearAnimation,
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

  return (
    <button
      style={{
        background: 'linear-gradient(331deg, #00BEAD 15.93%, #00C4B4 84.02%)',
        boxShadow: '0px 8px 16px 0px rgba(0, 180, 196, 0.20)',
      }}
      className={`
        ${loading || disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className || ''}
        ${
          isVisible
            ? `flex w-full h-12 p-3 justify-center items-center text-white text-lg rounded-full transition-all duration-500 ease-out active:scale-95`
            : 'fixed bottom-0 left-1/2 w-full h-12 translate-y-40'
        }
      `}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};
