import {factory, primaryKey} from '@mswjs/data'
import mockProduct from './__mocks__/products.json'

export const db = factory({
  product: {
    id: primaryKey(Number),
    popular: Boolean,
    name: String,
    badge: String,
    subtitle: String,
    price: Number,
    discountPrice: Number,
    inStock: Boolean,
    imageUrl: (): string[] => [],
  },
})

// 제품 데이터를 미리 등록
mockProduct.forEach((product) => db.product.create(product))


