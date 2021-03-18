export interface Book{
  name: string;
  image?: string;
  description: string;
  author: string;
  publishing: string;
  isbn: string;
  year: number;
  countPages?: number;
  rating?: number;
  feedback?: string;
  marginalia?: string;
}
