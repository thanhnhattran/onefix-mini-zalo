import { HTMLProps } from "react";

interface FormItemProps extends HTMLProps<HTMLDivElement> {
  label: string;
}

function FormItem({ label, children, className, ...props }: FormItemProps) {
  return (
    <div
      className={"flex flex-col space-y-2 ".concat(className ?? "")}
      {...props}
    >
      <span className="font-medium">{label}</span>
      {children}
    </div>
  );
}

export default FormItem;
