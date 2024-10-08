import {http, HttpResponse} from 'msw'
import {__serverDb} from "@shared/lib/server";

export const handlers = [
  http.get('/api/products/new', () => {
    const products = __serverDb.product.getAll()
    return HttpResponse.json(products)
  }),
]