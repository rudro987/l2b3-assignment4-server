import { Model } from "mongoose";

export type TBrands = 'MK' | 'Ducky' | 'Varmilo' | 'Keychron' | 'Pulsar' | 'Leopold' | 'Realforce' | 'Lamzu';

export type TProducts = {
  name: string;
  description: string;
  image: string;
  brand: TBrands;
  price: number;
  rating: number;
  quantity: number;
  isDeleted?: boolean;
}

export interface ProductsModel extends Model<TProducts> {
  isProductExists(name: string): Promise<TProducts | null>;
}
