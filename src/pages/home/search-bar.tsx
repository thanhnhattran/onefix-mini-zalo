import SearchIcon from "@/components/icons/search";
import Section from "@/components/section";

export default function SearchBar() {
  return (
    <Section>
      <div className="flex items-center justify-between rounded-[30px] bg-white p-2">
        <div className="flex items-center gap-1.5">
          <div className="h-5 w-5">
            <SearchIcon />
          </div>
          <span className="text-sm text-neutral-400">
            Tìm bệnh, bác sĩ, thuốc..
          </span>
        </div>
        <button
          className="rounded-[15px] px-3.5 py-1.5 text-center text-[13px] text-white"
          style={{
            background: "linear-gradient(90deg, #00b4c4, #00bead)",
          }}
        >
          Tìm
        </button>
      </div>
    </Section>
  );
}
