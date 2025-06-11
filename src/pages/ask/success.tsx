import FabForm from "@/components/form/fab-form";
import SuccessIcon from "@/components/icons/success";
import { useNavigate } from "react-router-dom";

function QuestionSentSuccessfully() {
  const navigate = useNavigate();

  return (
    <FabForm
      fab={{
        label: "Về trang chủ",
        onClick() {
          navigate("/");
        },
      }}
    >
      <div className="h-full flex justify-center items-center flex-col gap-3 text-center px-7">
        <SuccessIcon />
        <div className="self-stretch pt-2 text-lg font-medium text-neutral-900">
          Gửi thành công
        </div>
        <div className="flex items-center justify-center self-stretch text-sm leading-[26px] text-disabled text-center">
          Câu hỏi của bạn đã được gửi tới đội ngũ bác sĩ và tư vấn viên. Chúng
          tôi sẽ phản hồi lại sớm.
        </div>
      </div>
    </FabForm>
  );
}

export default QuestionSentSuccessfully;
