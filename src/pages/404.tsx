import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    toast.error("Trang không tồn tại");
    navigate(-1);
  }, []);
  return <></>;
}
