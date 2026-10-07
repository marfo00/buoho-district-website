export interface GalleryCardItem {
  id: string;
  title: string;
  category: 'Worship' | 'Praise' | 'Leadership' | 'Outreach' | 'Fellowship';
  image: string;
  description: string;
  verse?: string;
}

export interface ChurchInfo {
  name: string;
  branch: string;
  slogan: string;
  parentBody: string;
  tagline: string;
  location: string;
  sundayServices: string[];
  contactPhone: string;
}
