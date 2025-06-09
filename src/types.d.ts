export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface TimeSlot {
  date: Date;
  slots: {
    hour: number;
    half?: boolean;
    isAvailable: boolean;
  }[];
}

interface Doctor {
  id: number;
  name: string;
  title: string;
  languages: string;
  specialties: string;
  image: string;
  isAvailable: boolean;
}

export interface SymptomDescription {
  symptoms: string[];
  description: string;
  images: string[];
}

export interface Inquiry extends SymptomDescription {
  department: string;
}

export interface Feedback {
  title: string;
  description: string;
  images: string[];
  category: string;
}

export interface Booking {
  id: number;
  department: string;
  status: string;
  patientName: string;
  schedule: TimeSlot;
  doctor: Doctor;
}

export interface Invoice {
  id: number;
  booking: Booking;
}

export interface Department {
  id: number;
  name: string;
  description: string;
  subDepartments: string[];
}

interface Article {
  id: number;
  title: string;
  category: string;
  timeAgo: string;
  image: string;
}
