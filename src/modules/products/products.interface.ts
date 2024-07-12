import { Model } from "mongoose";

export type TProducts = {
  name: string;
  description: string;
  image: string;
  brand: 'MK' | 'Ducky' | 'Varmilo' | 'Keychron' | 'Pulsar' | 'Leopold' | 'Realforce' | 'Lamzu';
  price: number;
  rating: number;
  quantity: number;
  isDeleted: boolean;
}

export interface ProductsModel extends Model<TProducts> {
  isProductExists(name: string): Promise<TProducts | null>;
}
