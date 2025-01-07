export interface DataTypes {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}
