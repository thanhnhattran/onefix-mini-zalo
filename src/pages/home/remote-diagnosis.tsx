import RemoteDiagnosisItem from "@/components/remote-diagnosis-item";
import call from "@/static/call.svg";
import ship from "@/static/ship.svg";
import Section from "@/components/section";

export default function RemoteDiagnosis() {
  return (
    <Section className="pt-3" title="Chẩn đoán từ xa" isCard>
      <div className="grid grid-cols-2 gap-3 self-stretch">
        <RemoteDiagnosisItem
          icon={call}
          title="Cấp cứu"
          subtitle="BS gọi lại"
        />
        <RemoteDiagnosisItem
          icon={ship}
          title="Giao thuốc"
          subtitle="Tận nhà"
          maxWidth="73px"
        />
      </div>
    </Section>
  );
}
