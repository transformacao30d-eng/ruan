export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  stars: number;
  avatarBg: string;
}

export interface FeatureCard {
  id: string;
  iconName: string;
  title: string;
  description: string;
  badge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SampleWorksheet {
  id: string;
  title: string;
  category: string;
  description: string;
  previewType: 'alphabet' | 'motor' | 'numbers' | 'words';
}
