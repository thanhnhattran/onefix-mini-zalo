import { atom } from 'jotai';
import { atomFamily, atomWithReset } from 'jotai/utils';
import { Service } from './types';

const description = `<div class="font-roboto flex w-full flex-col gap-4 px-4 pt-4 text-sm leading-[normal] text-neutral-950 "><div class="flex items-start text-base font-medium leading-normal text-neutral-900"><p>Khoa nội khoa tổng quát đã được chứng nhận chất lượng bởi tổ chức gia đình bác sĩ thế giới WONCA</p></div><div class="flex items-start"><p>Bệnh nội khoa, tổng quát bao gồm rất nhiều bệnh lý thuộc các chuyên ngành y khác nhau, chủ yếu được điều trị bằng thuốc kết hợp các thủ thuật nhỏ (nếu có) và thay đổi lối sống, chế độ dinh dưỡng, nghỉ ngơi, vận động khoa học.</p></div><div class="h-52 w-[343px]"><svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 343 200" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: visible;"><g clip-path="url(#clip0_70_1840)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H331C337.627 0 343 5.37258 343 12V188C343 194.627 337.627 200 331 200H12C5.37258 200 0 194.627 0 188V12Z" fill="#E2F1F8"></path><mask id="mask0_70_1840" maskUnits="userSpaceOnUse" x="0" y="0" width="343" height="200" style="mask-type: luminance;"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H331C337.627 0 343 5.37258 343 12V188C343 194.627 337.627 200 331 200H12C5.37258 200 0 194.627 0 188V12Z" fill="white"></path></mask><g mask="url(#mask0_70_1840)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 -116H343V226H1V-116Z" fill="url(#pattern-70:1840-0_70_1840)"></path></g></g><defs><pattern id="pattern-70:1840-0_70_1840" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_70_1840" transform="scale(0.00177305)"></use></pattern><clipPath id="clip0_70_1840"><rect width="343" height="200" fill="white"></rect></clipPath><image id="image0_70_1840" width="564" height="564" preserveAspectRatio="none" xlink:href="blob:https://app.firejet.io/7d1515fd-254c-4841-a570-c022aa4aaf76"></image></defs></svg></div><div class="h-56"><span><p class="mb-[5px]">Khám nội tổng quát (hay khám nội khoa) hay khám sức khỏe nội tổng quát là cách hiệu quả để mỗi người chủ động phát hiện bệnh kịp thời và điều trị bệnh từ sớm. Quy trình thăm khám nội tổng quát thường bao gồm:</p><div class="mb-[5px] h-5"></div><p class="mb-[5px]">Kiểm tra cơ bản: Bao gồm việc kiểm tra cân nặng, chiều cao, đo huyết áp… Các thông số này có thể cung cấp những thông tin quan trọng về tình trạng sức khỏe cơ bản của cơ thể.</p><p class="mb-[5px]">Khám lâm sàng (nội hô hấp, tiêu hóa, nội tiết, thần kinh, cơ xương khớp, tai mũi họng, răng hàm mặt…): Thông qua việc khám lâm sàng, bác sĩ có thể đánh giá ban đầu tình trạng sức khỏe, bệnh lý của người bệnh..</p><p class="mb-[5px]">Xét nghiệm, chụp chiếu: Sau khám lâm sàng, bác sĩ có thể chỉ định người bệnh thực hiện các cận lâm sàng chuyên sâu như xét nghiệm máu, xét nghiệm nước tiểu, siêu âm bụng, siêu âm tim, siêu âm tổng quát, chụp X-quang, chụp CT, chụp MRI, siêu âm… để tầm soát, đánh giá, phát hiện các bệnh lý liên quan, kể cả ung thư.</p><p>Lưu ý, quy trình ở trên chỉ mang tính tham khảo. Tùy mỗi bệnh lý hay tùy tại mỗi cơ sở y tế, danh mục khám nội tổng quát, quy trình sẽ được xây dựng khác nhau và còn thay đổi.</p></span></div></div>`;

export const servicesState = atom<Promise<Service[]>>(async () => [
  {
    id: '1',
    name: 'Điều trị giảm cân',
    description,
    image: 'https://via.placeholder.com/150',
    price: 100000,
  },
  {
    id: '2',
    name: 'Tăng chiều cao',
    description,
    image: 'https://via.placeholder.com/150',
    price: 100000,
  },
]);

export const serviceState = atomFamily((id: string) =>
  atom(async get => {
    const services = await get(servicesState);
    return services.find(service => service.id === id);
  })
);

export const consultationFormState = atomFamily((serviceId: string) =>
  atomWithReset({
    symptoms: [],
    description: '',
    images: [] as string[],
  })
);

export const symptomsState = atom(() => [
  'Đau đầu',
  'Choáng váng',
  'Sốt cao',
  'Ho khan',
  'Khó thở',
  'Đau họng',
  'Mệt mỏi',
  'Chán ăn',
  'Buồn nôn',
  'Tiêu chảy',
]);
