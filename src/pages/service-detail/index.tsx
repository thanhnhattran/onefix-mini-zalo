import Tabs from "@/components/tabs";
import { serviceState } from "@/state";
import { useAtomValue } from "jotai";
import { useParams } from "react-router-dom";
import NotFound from "../404";
import { useState } from "react";
import DoctorItem from "@/components/items/doctor";
import { DOCTORS } from "@/components/items/doctor";
import Consultation from "./consultation";

function ServiceDetailPage() {
  const { id } = useParams();
  const service = useAtomValue(serviceState(id!));
  const [activeTab, setActiveTab] = useState(0);

  if (!service) {
    return <NotFound />;
  }

  return (
    <Tabs
      activeTab={activeTab}
      onTabChange={setActiveTab}
      tabs={[
        {
          name: "Giới thiệu",
          content: () => (
            <div dangerouslySetInnerHTML={{ __html: service.description }} />
          ),
        },
        {
          name: "Bác sĩ",
          content: () => (
            <div className="flex flex-col gap-6 bg-white mt-3 p-4">
              {DOCTORS.map((doctor, index) => (
                <DoctorItem key={index} doctor={doctor} />
              ))}
            </div>
          ),
        },
        {
          name: "Tư vấn",
          content: Consultation,
        },
      ]}
    />
  );
}

export default ServiceDetailPage;
