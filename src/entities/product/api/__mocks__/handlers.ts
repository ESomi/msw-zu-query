import {http, HttpResponse} from 'msw';
import {__serverDb} from "@shared/lib/server";
import {ProductDto} from "../../types";

export const handlers = [
  http.get('/api/products/new', () => {
    const products: ProductDto[] = __serverDb.product.getAll();
    return HttpResponse.json(products);
  }),
];
