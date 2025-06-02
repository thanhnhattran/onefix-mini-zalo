import { ReactNode } from "react";

function ServiceHighlight(props: {
  title: string;
  subtitle: string;
  cta?: ReactNode;
  background: string;
  color: string;
  image: string;
}) {
  return (
    <div
      className="relative flex flex-col gap-[5px] bg-cover bg-center pb-4 px-3 pt-3 w-full h-full rounded-xl rounded-br-none"
      style={{
        background: props.background,
      }}
    >
      <img src={props.image} className="absolute bottom-0 right-0 z-[2] w-20" />
      <div
        className="z-[3] text-[15px] font-medium"
        style={{ color: props.color }}
      >
        {props.title}
      </div>
      <div className="z-[4] text-xs text-neutral-400">{props.subtitle}</div>
      {props.cta}
    </div>
  );
}

export default ServiceHighlight;
