import { Button } from '@/components/button';
import FormItem from '@/components/form/item';
import TextareaWithImageUpload from '@/components/form/textarea-with-image-upload';
import { consultationFormState, symptomsState } from '@/state';
import { useAtom, useAtomValue } from 'jotai';
import { Select, useParams } from 'zmp-ui';
import { ReactNode, useState } from 'react';
import FabForm from '@/components/form/fab-form';
import SuccessIcon from '@/components/icons/success';
import { useNavigate } from 'react-router-dom';
import { wait } from '@/utils/wait';
import toast from 'react-hot-toast';
import { useResetAtom } from 'jotai/utils';

const { Option } = Select;

function Consultation() {
  const { id } = useParams();
  const [formData, setFormData] = useAtom(consultationFormState(id!));
  const resetFormData = useResetAtom(consultationFormState(id!));
  const symptoms = useAtomValue(symptomsState);
  const navigate = useNavigate();

  return (
    <FabForm
      onSubmit={async () => {
        toast.success(`Gửi thông tin này lên server để xử lý: ${JSON.stringify(formData)}`, {
          duration: 3000,
        });
        await wait(3000);
        resetFormData();
      }}
      fab={{
        label: 'Gửi câu hỏi',
      }}
      successState={{
        children: (
          <div className="relative flex w-full flex-col items-center gap-3 text-center px-7">
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
        ),
        fab: {
          label: 'Về trang chủ',
          onClick() {
            navigate('/');
          },
        },
      }}
    >
      <div className="bg-white p-4 space-y-4">
        <FormItem label="Triệu chứng">
          <Select multiple>
            {symptoms.map((symptom, index) => (
              <Option key={index} value={symptom}>
                {symptom}
              </Option>
            ))}
          </Select>
        </FormItem>
        <FormItem label="Mô tả chi tiết">
          <TextareaWithImageUpload
            textarea={{
              value: formData.description,
              onChange: description => setFormData(prev => ({ ...prev, description })),
            }}
            images={{
              values: formData.images,
              onChange: images => setFormData(prev => ({ ...prev, images })),
            }}
          />
        </FormItem>
      </div>
    </FabForm>
  );
}

export default Consultation;
