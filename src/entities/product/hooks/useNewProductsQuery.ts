import {useQuery} from "@tanstack/react-query";
import {ProductDto} from "../types.ts";

const fetchNewProducts = async (): Promise<ProductDto[]> => {
  const response = await fetch('/api/products/new');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export const useNewProductsQuery = () => {
  return useQuery<ProductDto[]>({
    queryKey: ['products', 'new'],
    queryFn: fetchNewProducts,
  });
}
