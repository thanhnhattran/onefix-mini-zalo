import { symptomFormState } from "@/state";
import { useAtom } from "jotai";
import { useParams } from "zmp-ui";
import FabForm from "@/components/form/fab-form";
import { useResetAtom } from "jotai/utils";
import SymptomInquiry from "@/components/form/symptom-inquiry";
import { useState } from "react";
import { promptJSON, wait } from "@/utils/miscellaneous";
import QuestionSentSuccessfully from "../ask/success";
import toast from "react-hot-toast";

function Tab3() {
  const { id } = useParams();
  const [formData, setFormData] = useAtom(symptomFormState(id!));
  const resetFormData = useResetAtom(symptomFormState(id!));

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return <QuestionSentSuccessfully />;
  }

  return (
    <FabForm
      onSubmit={async () => {
        await wait(1500);
        promptJSON(formData);
        setIsSubmitted(true);
        resetFormData();
      }}
      fab={{
        children: "Gửi câu hỏi",
      }}
    >
      <SymptomInquiry value={formData} onChange={setFormData} />
    </FabForm>
  );
}

export default Tab3;
