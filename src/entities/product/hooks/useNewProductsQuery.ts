import {useQuery} from "@tanstack/react-query";

const fetchNewProducts = async () => {
  const response = await fetch('/api/products/new')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const useNewProductsQuery = () => {
  return useQuery({
    queryKey: ['products', 'new'],
    queryFn: fetchNewProducts,
  });
}