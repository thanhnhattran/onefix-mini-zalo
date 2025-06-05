import FormItem from '@/components/form/item';
import TextareaWithImageUpload from '@/components/form/textarea-with-image-upload';
import { symptomsState } from '@/state';
import { useAtomValue } from 'jotai';
import { Select } from 'zmp-ui';
import { SymptomDescription } from '@/types';

const { Option } = Select;

export interface SymptomInquiryProps {
  value: SymptomDescription;
  onChange: (
    value: SymptomDescription | ((prev: SymptomDescription) => SymptomDescription)
  ) => void;
}

function SymptomInquiry({ value, onChange }: SymptomInquiryProps) {
  const symptoms = useAtomValue(symptomsState);

  return (
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
            value: value.description,
            onChange: description => onChange(prev => ({ ...prev, description })),
          }}
          images={{
            values: value.images,
            onChange: images => onChange(prev => ({ ...prev, images })),
          }}
        />
      </FormItem>
    </div>
  );
}

export default SymptomInquiry;
