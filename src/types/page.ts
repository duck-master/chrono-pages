export type Theme = 'past' | 'present' | 'future';

export interface PageData {
  id: number;
  theme: Theme;
  title: string;
  subtitle: string;
  body: string;
  imageUrl?: string;
}
