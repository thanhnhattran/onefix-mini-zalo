import { serviceByIdState } from "@/state";
import { useAtomValue } from "jotai";
import { useParams } from "react-router-dom";
import NotFound from "../404";

export default function Tab1() {
  const { id } = useParams();
  const service = useAtomValue(serviceByIdState(Number(id)));

  if (!service) {
    return <NotFound />;
  }

  return <div dangerouslySetInnerHTML={{ __html: service.description }} />;
}
