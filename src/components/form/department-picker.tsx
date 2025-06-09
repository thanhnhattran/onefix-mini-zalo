import { departmentsState } from '@/state';
import { useAtomValue } from 'jotai';
import { Select } from 'zmp-ui';

const { Option, OtpGroup } = Select;

interface DepartmentPickerProps {
  value?: string;
  onChange?: (value: string) => void;
}

function DepartmentPicker({ value, onChange }: DepartmentPickerProps) {
  const departments = useAtomValue(departmentsState);

  return (
    <Select label="Khoa khám" closeOnSelect value={value} onChange={onChange}>
      {departments.map(specialty => (
        <OtpGroup key={specialty.name} label={specialty.name}>
          {specialty.subDepartments.map(subSpecialty => (
            <Option key={subSpecialty} title={subSpecialty} value={subSpecialty} />
          ))}
        </OtpGroup>
      ))}
    </Select>
  );
}

export default DepartmentPicker;
