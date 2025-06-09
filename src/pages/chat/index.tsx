import DoctorItem from '@/components/items/doctor';
import { mockDoctors } from '@/utils/mock';

function ChatPage() {
  const [d1, d2] = mockDoctors();
  return (
    <div className="p-4 space-y-6">
      <DoctorItem doctor={d1} />
      <DoctorItem doctor={d2} />
    </div>
  );
}

export default ChatPage;
