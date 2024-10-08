import {factory, primaryKey} from '@mswjs/data'
import {productsMock} from "@shared/lib/server/index.ts";

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

export function seedProducts() {
  productsMock.forEach(product => db.product.create(product))
}

// 서버가 시작될 때 데이터베이스를 초기화
seedProducts()



