import FabForm from '@/components/form/fab-form';
import SuccessIcon from '@/components/icons/success';
import { bookingFormState, userState } from '@/state';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

function DashedDivider() {
  return (
    <div className="flex flex-col justify-end self-stretch pt-2">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 311 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <path d="M0 0.5H311" stroke="#CCCCCC" strokeDasharray="4 8" />
      </svg>
    </div>
  );
}

export default function Step3() {
  const navigate = useNavigate();
  const { userInfo } = useAtomValue(userState);
  const booking = useAtomValue(bookingFormState);

  return (
    <FabForm
      fab={{
        label: 'Xem lịch hẹn của tôi',
        onClick: () => {
          navigate('/history');
        },
      }}
    >
      <div className="p-4 h-full flex items-center">
        <div className="flex w-full flex-col items-center gap-4 rounded-2xl bg-white px-4 py-8">
          <SuccessIcon />
          <div className="self-stretch text-center text-lg font-medium text-neutral-900">
            Đặt lịch thành công
          </div>
          <DashedDivider />
          <div className="flex items-start justify-center gap-4 self-stretch pt-2 text-[13px]">
            <dl className="flex w-full flex-col gap-4">
              {[
                ['Tên', userInfo.name],
                ['Khu vực bệnh viện', 'Bệnh viện Quốc tế Gia Hội Thượng Hải'],
                ['Khoa', 'Nội khoa A'],
                ['Thời gian khám bệnh', '2022.02.16 Thứ Tư 09:00-09:30'],
                ['Loại khám bệnh', 'Khám bệnh\nKhám lần đầu'],
              ].map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <dt className="text-[dimgray]">{key}</dt>
                  <dd className="text-right font-medium text-neutral-900">
                    {value.includes('\n') ? (
                      <span className="text-right">
                        {value.split('\n').map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </span>
                    ) : (
                      <p className="text-right">{value}</p>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </FabForm>
  );
}
