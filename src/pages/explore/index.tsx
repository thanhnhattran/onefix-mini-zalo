import { ExploreItem, exploreItems } from "./ExploreItem";

function ExplorePage() {
  return (
    <div className="flex w-full flex-col leading-normal space-y-6 py-4 px-4">
      {exploreItems.map((item, index) => (
        <ExploreItem key={index} {...item} />
      ))}
    </div>
  );
}

export default ExplorePage;
