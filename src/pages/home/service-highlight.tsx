import TransitionLink from "@/components/transition-link";
import { ReactNode } from "react";
import { To } from "react-router-dom";

function ServiceHighlight(props: {
  title: string;
  subtitle: string;
  cta?: ReactNode;
  background: string;
  color: string;
  image: string;
  to: To;
}) {
  return (
    <TransitionLink
      className="relative flex flex-col gap-1.5 bg-cover bg-center pb-4 px-3 pt-3 w-full h-full rounded-xl rounded-br-none"
      style={{
        background: props.background,
      }}
      to={props.to}
    >
      <img src={props.image} className="absolute bottom-0 right-0 w-20" />
      <div className="text-base font-medium" style={{ color: props.color }}>
        {props.title}
      </div>
      <div className="text-xs text-disabled">{props.subtitle}</div>
      {props.cta}
    </TransitionLink>
  );
}

export default ServiceHighlight;
