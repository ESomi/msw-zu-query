export interface ProductDto {
  id: number;
  popular: boolean;
  name: string;
  badge: string;
  subtitle: string;
  price: number;
  discountPrice: number;
  inStock: boolean;
  imageUrl: string[];
}