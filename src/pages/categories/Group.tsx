export default function Group() {
    return (
        <div className="flex flex-col space-y-3">
            <h2 className="text-[15px] font-medium text-neutral-800">Tổng quát</h2>
            <div className="grid grid-cols-2 gap-[9px]">
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((letter) => (
                    <div key={letter} className="flex flex-col gap-2 rounded-lg bg-slate-50 p-2.5 pr-[22px]">
                        <div className="text-sm font-medium text-neutral-800">Nội khoa {letter}</div>
                        <div className="text-xs text-neutral-400">Mô tả ngắn gọn</div>
                    </div>
                ))}
            </div>
        </div>
    );
} 