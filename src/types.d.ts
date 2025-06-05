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
