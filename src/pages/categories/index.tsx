import Header from "./Header";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import RightContent from "./RightContent";

export default function CategoriesPage() {
  return (
    <div className="overflow-hidden flex-1 flex flex-col bg-white">
      <Header />
      <SearchBar />
      <div className="relative flex pt-6 overflow-hidden">
        <Sidebar />
        <RightContent />
      </div>
    </div>
  );
}
