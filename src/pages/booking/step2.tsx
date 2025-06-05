import FabForm from '@/components/form/fab-form';
import SymptomInquiry from '@/components/form/symptom-inquiry';
import { bookingFormState } from '@/state';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

export default function Step2() {
  const [formData, setFormData] = useAtom(bookingFormState);
  const navigate = useNavigate();

  return (
    <FabForm
      fab={{
        label: 'Đặt lịch khám',
        onClick: () => {
          navigate('/booking/3');
        },
      }}
    >
      <SymptomInquiry value={formData} onChange={setFormData} />
    </FabForm>
  );
}
