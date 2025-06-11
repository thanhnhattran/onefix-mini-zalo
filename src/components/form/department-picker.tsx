import { departmentHierarchyState, departmentsState } from "@/state";
import { Department } from "@/types";
import { useAtomValue } from "jotai";
import { Select } from "zmp-ui";

const { Option, OtpGroup } = Select;

interface DepartmentPickerProps {
  value?: Department;
  onChange?: (value: Department) => void;
}

function DepartmentPicker({ value, onChange }: DepartmentPickerProps) {
  const data = useAtomValue(departmentHierarchyState);

  return (
    <Select
      label="Khoa khám"
      closeOnSelect
      value={value?.id}
      onChange={(value) => {
        const dep = data
          .reduce(
            (acc, group) => [...acc, ...group.subDepartments],
            [] as Department[]
          )
          .find((dep) => dep.id === value);
        if (dep) {
          onChange?.(dep);
        }
      }}
    >
      {data.map((group) => (
        <OtpGroup key={group.name} label={group.name}>
          {group.subDepartments.map((dep) => (
            <Option key={dep.id} value={dep.id} title={dep.name} />
          ))}
        </OtpGroup>
      ))}
    </Select>
  );
}

export default DepartmentPicker;
