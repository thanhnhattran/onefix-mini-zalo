import { ReactNode } from 'react';
import ArrowRightIcon from './icons/arrow-right';

interface SectionProps {
    children: ReactNode;
    className?: string;
    title?: string;
    viewMore?: boolean;
    isCard?: boolean;
}

export default function Section({
    children,
    className = '',
    title,
    viewMore,
    isCard = false
}: SectionProps) {
    const header = (title || viewMore) && (
        <div className="flex items-center justify-between flex-wrap gap-1">
            {title && (
                <div className="font-medium text-neutral-800 text-[15px]">
                    {title}
                </div>
            )}
            {viewMore && (
                <div className="flex items-center justify-center gap-1">
                    <div className="text-xs text-neutral-400">Xem tất cả</div>
                    <ArrowRightIcon className="h-3 w-3" />
                </div>
            )}
        </div>
    );

    return (
        <div className={`px-4 ${className}`}>
            {isCard ? (
                <div className="flex flex-col justify-center gap-4 rounded-xl bg-white p-3.5">
                    {header}
                    {children}
                </div>
            ) : (
                <>
                    {header}
                    {children}
                </>
            )}
        </div>
    );
}
