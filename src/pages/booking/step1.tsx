import DateTimePicker, { SelectedSlot } from '@/components/form/date-time-picker';
import DoctorSelector from '@/components/form/doctor-selector';
import DepartmentPicker from '@/components/form/department-picker';
import FabForm from '@/components/form/fab-form';
import { availableTimeSlotsState, bookingFormState, departmentsState } from '@/state';
import { useAtom, useAtomValue } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Step1() {
  const timeSlots = useAtomValue(availableTimeSlotsState);
  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot>();
  const [formData, setFormData] = useAtom(bookingFormState);
  const navigate = useNavigate();

  return (
    <FabForm
      fab={{
        label: 'Tiếp tục',
        onClick: () => {
          navigate('/booking/2');
        },
      }}
    >
      <div className="bg-white flex flex-col space-y-1">
        <div className="p-4">
          <DepartmentPicker
            value={formData?.department}
            onChange={department =>
              setFormData(prev => ({
                ...prev,
                department,
              }))
            }
          />
        </div>
        <DateTimePicker value={selectedSlot} onChange={setSelectedSlot} slots={timeSlots} />
      </div>
      <DoctorSelector
        value={formData?.doctor}
        onChange={doctor =>
          setFormData(prev => ({
            ...prev,
            doctor,
          }))
        }
      />
    </FabForm>
  );
}
