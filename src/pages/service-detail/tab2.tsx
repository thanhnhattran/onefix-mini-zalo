import DoctorSelector from "@/components/form/doctor-selector";
import FabForm from "@/components/form/fab-form";
import { bookingFormState, serviceState } from "@/state";
import { Doctor } from "@/types";
import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import NotFound from "../404";

export default function Tab2() {
  const { id } = useParams();
  const service = useAtomValue(serviceState(Number(id)));
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>();
  const [query] = useSearchParams();
  const navigate = useNavigate();
  const setBookingData = useSetAtom(bookingFormState);

  if (!service) {
    return <NotFound />;
  }

  return (
    <FabForm
      fab={{
        children: "Đặt lịch khám",
        onClick: () => {
          setBookingData((prev) => ({
            ...prev,
            department: service.department,
            doctor: selectedDoctor,
          }));
          navigate("/booking");
        },
      }}
    >
      <DoctorSelector
        value={selectedDoctor}
        onChange={setSelectedDoctor}
        onLoadDoctors={(doctors) => {
          const doctorId = query.get("doctor");
          const doctor = doctors.find((d) => d.id === Number(doctorId));
          if (doctor && !selectedDoctor) {
            setSelectedDoctor(doctor);
          }
        }}
      />
    </FabForm>
  );
}
