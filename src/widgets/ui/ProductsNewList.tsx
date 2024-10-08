import {useNewProductsQuery} from "@entities/product/hooks/useNewProductsQuery.ts";
import css from './ProductNewList.module.css'
import {ProductDto} from "@entities/product/types.ts";

export function ProductNewList() {
  const {data = [], isFetching} = useNewProductsQuery()

  if (isFetching) {
    return <div>Loading...</div>
  }

  if (data.length < 1) {
    return <div>No products available</div>
  }

  return (
    <div className={css.wrapper}>
      <div className={css.productList}>
        {data.map((product: ProductDto) => (
          <div key={product.id} className={css.productCard}>
            <div className={css.productCardName}>{product.name}</div>
            <div className={css.productCardPrice}>{product.price} 원</div>
          </div>
        ))}
      </div>
    </div>
  )
}
