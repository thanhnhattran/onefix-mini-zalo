import SearchIcon from "@/components/icons/search";

export default function SearchBar() {
    return (
        <div className="px-4 pt-4">
            <div className="flex items-center gap-1.5 rounded-[30px] border border-black/10 px-2 py-1.5">
                <SearchIcon width={20} height={20} />
                <span className="text-sm text-neutral-400">Tìm khoa hoặc bệnh</span>
            </div>
        </div>
    );
} 