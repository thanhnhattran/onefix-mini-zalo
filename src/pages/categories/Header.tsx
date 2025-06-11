export default function Header() {
  return (
    <div className="px-4 pt-3">
      <div className="flex items-center justify-between gap-4 rounded-lg bg-teal-500/10 p-3">
        <span className="text-sm text-disabled">
          Không biết chọn dịch vụ nào?
        </span>
        <button className="rounded-xl bg-white px-3 py-1 text-xs text-teal-500">
          Tư vấn khám
        </button>
      </div>
    </div>
  );
}
