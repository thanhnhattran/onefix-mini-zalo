import { useState } from "react";
import Tabs from "@/components/tabs";
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";
import { useSearchParams } from "react-router-dom";

function ServiceDetailPage() {
  const [query] = useSearchParams();
  const tab = query.get("tab");
  const [activeTab, setActiveTab] = useState(Number(tab) || 0);

  return (
    <Tabs
      activeTab={activeTab}
      onTabChange={setActiveTab}
      tabs={[
        {
          name: "Giới thiệu",
          content: Tab1,
        },
        {
          name: "Bác sĩ",
          content: Tab2,
        },
        {
          name: "Tư vấn",
          content: Tab3,
        },
      ]}
    />
  );
}

export default ServiceDetailPage;
