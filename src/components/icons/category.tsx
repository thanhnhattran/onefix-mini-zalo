import { SVGProps } from "react";

interface CategoryIconProps extends SVGProps<SVGSVGElement> {
    active?: boolean;
}

export default function CategoryIcon({ active, ...props }: CategoryIconProps) {
    return (
        <svg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 20.3 20.3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: "visible" }}
            {...props}
        >
            <g clipPath="url(#clip0_2019_7709)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.27808 5.78912C0.458082 8.85912 0.368082 12.6591 2.06808 15.8091C0.848082 18.0991 0.468082 19.9091 1.26808 20.7191C2.88808 22.3291 8.53808 19.2891 13.9081 13.9191C19.2781 8.54912 22.3281 2.87912 20.7181 1.27912C19.9081 0.469121 18.1081 0.849121 15.7981 2.07912C14.3281 1.27912 12.6781 0.849121 10.9981 0.849121C7.42808 0.849121 4.11808 2.72912 2.27808 5.78912ZM5.91989 8.97264C5.91989 9.53264 6.36989 9.98264 6.93989 9.98264C7.49989 9.98264 7.94989 9.53264 7.94989 8.97264C7.94989 8.40264 7.49989 7.95264 6.93989 7.95264C6.36989 7.95264 5.91989 8.40264 5.91989 8.97264ZM8.96539 4.90842C8.96539 6.02842 9.87539 6.93842 10.9954 6.93842C12.1154 6.93842 13.0254 6.02842 13.0254 4.90842C13.0254 3.78842 12.1154 2.87842 10.9954 2.87842C9.87539 2.87842 8.96539 3.78842 8.96539 4.90842Z"
                    fill={active ? "url(#paint0_linear_2019_7709)" : "#DADADA"}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.1613 18.1533C20.9913 15.3233 21.8913 11.0833 20.4513 7.34326C18.8213 9.99326 16.8613 12.4433 14.6313 14.6233C12.4413 16.8533 9.99128 18.8133 7.34128 20.4533C11.0813 21.8933 15.3213 20.9933 18.1613 18.1533Z"
                    fill={active ? "url(#paint0_linear_2019_7709)" : "#DADADA"}
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_2019_7709"
                    x1="-1.82418"
                    y1="11.6563"
                    x2="10.121"
                    y2="29.6963"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#00BEAD" />
                    <stop offset="1" stopColor="#00B4C4" />
                </linearGradient>
                <clipPath id="clip0_2019_7709">
                    <rect
                        width="20.3"
                        height="20.3"
                        fill="white"
                        transform="translate(0.849609 0.849121)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
} 