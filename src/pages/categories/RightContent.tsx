import Group from "./Group";

export default function RightContent() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto px-4 pb-5 space-y-5">
      <Group />
      <Group />
    </div>
  );
}
