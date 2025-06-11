import { atom } from 'jotai';
import { atomFamily, atomWithReset, loadable } from 'jotai/utils';
import { Doctor, Feedback, Inquiry, Service, SymptomDescription, TimeSlot } from './types';
import {
  mock7DaysTimeSlots,
  mockDoctors,
  mockBookings,
  mockServices,
  mockInvoices,
  mockArticles,
  mockDepartments,
} from './utils/mock';
import { getUserInfo } from 'zmp-sdk';
import { toLowerCaseNonAccentVietnamese, wait } from './utils/miscellaneous';

export const userState = atom(() =>
  getUserInfo({
    avatarType: 'normal',
  })
);

export const servicesState = atom(mockServices);

export const serviceState = atomFamily((id: string) =>
  atom(async get => {
    const services = await get(servicesState);
    return services.find(service => service.id === id);
  })
);

export const symptomFormState = atomFamily((serviceId: string) =>
  atomWithReset<SymptomDescription>({
    symptoms: [],
    description: '',
    images: [],
  })
);

export const askFormState = atomWithReset<Inquiry>({
  department: '',
  symptoms: [],
  description: '',
  images: [],
});

export const feedbackFormState = atomWithReset<Feedback>({
  title: '',
  description: '',
  images: [],
  category: '',
});

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

export const feedbackCategoriesState = atom(() => [
  'Tình trạng hoạt động',
  'Thái độ nhân viên',
  'Khác',
]);

export const availableTimeSlotsState = atom<TimeSlot[]>(mock7DaysTimeSlots);

export const articlesState = atom(mockArticles);

export const doctorsState = atom(mockDoctors);

export const bookingFormState = atomWithReset<{
  slot?: TimeSlot;
  doctor?: Doctor;
  department?: string;
  symptoms: string[];
  description: string;
  images: string[];
}>({
  symptoms: [],
  description: '',
  images: [] as string[],
});

export const departmentsState = atom(mockDepartments);

export const schedulesState = atom(mockBookings);

export const scheduleByIdState = atomFamily((id: number) =>
  atom(get => {
    const schedules = get(schedulesState);
    return schedules.find(s => s.id === id);
  })
);

export const invoicesState = atom(mockInvoices);

export const searchResultState = atomFamily((keyword: string) =>
  loadable(
    atom(async get => {
      await wait(1500);
      const doctors = get(doctorsState);
      const departments = get(departmentsState);
      const news = get(articlesState);
      const normalizedKeyword = toLowerCaseNonAccentVietnamese(keyword);
      return {
        doctors: doctors.filter(
          d =>
            toLowerCaseNonAccentVietnamese(d.name).includes(normalizedKeyword) ||
            toLowerCaseNonAccentVietnamese(d.specialties).includes(normalizedKeyword)
        ),
        departments: departments.filter(
          d =>
            toLowerCaseNonAccentVietnamese(d.name).includes(normalizedKeyword) ||
            d.subDepartments.some(sd =>
              toLowerCaseNonAccentVietnamese(sd).includes(normalizedKeyword)
            )
        ),
        news: news.filter(
          n =>
            toLowerCaseNonAccentVietnamese(n.title).includes(normalizedKeyword) ||
            toLowerCaseNonAccentVietnamese(n.category).includes(normalizedKeyword)
        ),
      };
    })
  )
);
