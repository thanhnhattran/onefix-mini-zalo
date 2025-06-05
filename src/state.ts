import { atom } from 'jotai';
import { atomFamily, atomWithReset } from 'jotai/utils';
import { Doctor, Service, SymptomDescription, TimeSlot } from './types';
import { mock7DaysTimeSlots, mockDoctors, mockServices, mockSpecialties } from './utils/mock';
import { getUserInfo } from 'zmp-sdk';

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

export const availableTimeSlotsState = atom<TimeSlot[]>(mock7DaysTimeSlots);

export const doctorsState = atom(mockDoctors);

export const bookingFormState = atomWithReset<{
  slot?: TimeSlot;
  doctor?: Doctor;
  symptoms: string[];
  description: string;
  images: string[];
}>({
  symptoms: [],
  description: '',
  images: [] as string[],
});

export const specialtiesState = atom(mockSpecialties);
