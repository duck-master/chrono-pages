export type Theme = 'past' | 'present' | 'future' | 'welcome';

export interface TofuDish {
  name: string;
  image: string;
}

export interface PageData {
  id: number;
  theme: Theme;
  title?: string;
  highlightedWord?: string;
  subtitle?: string;
  body?: string;
  imageUrl?: string;
  prompts?: string[];
  funFacts?: string[];
  question?: string;
  tofuDishes?: TofuDish[];
}
