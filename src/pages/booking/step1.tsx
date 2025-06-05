import DateTimePicker, { SelectedSlot } from '@/components/form/date-time-picker';
import DoctorSelector from '@/components/form/doctor-selector';
import FabForm from '@/components/form/fab-form';
import { availableTimeSlotsState, bookingFormState, specialtiesState } from '@/state';
import { useAtom, useAtomValue } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select } from 'zmp-ui';

const { Option, OtpGroup } = Select;

export default function Step1() {
  const timeSlots = useAtomValue(availableTimeSlotsState);
  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot>();
  const [formData, setFormData] = useAtom(bookingFormState);
  const specialties = useAtomValue(specialtiesState);
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
        <Select className="m-4" label="Khoa khám" closeOnSelect>
          {specialties.map(specialty => (
            <OtpGroup key={specialty.name} label={specialty.name}>
              {specialty.subSpecialties.map(subSpecialty => (
                <Option key={subSpecialty} title={subSpecialty} value={subSpecialty} />
              ))}
            </OtpGroup>
          ))}
        </Select>
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
