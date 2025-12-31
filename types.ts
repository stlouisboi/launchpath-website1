
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
}

export interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  state: string;
  dotActive: boolean;
  mcStatus: 'active' | 'inactive' | 'never';
  biggestConcern: string;
  goal: string;
}
