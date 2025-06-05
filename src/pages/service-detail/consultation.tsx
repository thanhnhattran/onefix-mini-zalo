import { symptomFormState } from '@/state';
import { useAtom } from 'jotai';
import { useParams } from 'zmp-ui';
import FabForm from '@/components/form/fab-form';
import SuccessIcon from '@/components/icons/success';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useResetAtom } from 'jotai/utils';
import SymptomInquiry from '@/components/form/symptom-inquiry';
import { useState } from 'react';
import { wait } from '@/utils/miscellaneous';

function Consultation() {
  const { id } = useParams();
  const [formData, setFormData] = useAtom(symptomFormState(id!));
  const resetFormData = useResetAtom(symptomFormState(id!));
  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <FabForm
        fab={{
          label: 'Về trang chủ',
          onClick() {
            navigate('/');
          },
        }}
      >
        <div className="h-full flex justify-center items-center flex-col gap-3 text-center px-7">
          <SuccessIcon />

          <div className="self-stretch pt-2 text-lg font-medium text-neutral-900">
            Gửi thành công
          </div>
          <div className="flex items-center justify-center self-stretch text-sm leading-[26px] text-[darkgray]">
            <p className="text-center">
              Câu hỏi của bạn đã được gửi tới đội ngũ bác sĩ và tư vấn viên. Chúng tôi sẽ phản hồi
              lại sớm.
            </p>
          </div>
        </div>
      </FabForm>
    );
  }

  return (
    <FabForm
      onSubmit={async () => {
        toast.success(`Gửi thông tin này lên server để xử lý: ${JSON.stringify(formData)}`, {
          duration: 3000,
        });
        await wait(3000);
        setIsSubmitted(true);
        resetFormData();
      }}
      fab={{
        label: 'Gửi câu hỏi',
      }}
    >
      <SymptomInquiry value={formData} onChange={setFormData} />
    </FabForm>
  );
}

export default Consultation;
