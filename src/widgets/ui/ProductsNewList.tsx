import {useNewProductsQuery} from "@entities/product/hooks/useNewProductsQuery.ts";
import css from './ProductNewList.module.css';
import {ProductDto} from "@entities/product/types.ts";

export function ProductNewList() {
  const {data = [], isFetching} = useNewProductsQuery();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (data.length < 1) {
    return <div>No products available</div>;
  }

  return (
    <div className={css.wrapper}>
      <div className={css.productList}>
        {data.map((product: ProductDto) => (
          <div key={product.id} className={css.productCard}>
            {product.badge && <div className={css.badge}>{product.badge}</div>}
            <img
              src={product.imageUrl[0] || 'https://via.placeholder.com/70'}
              alt={product.name || 'No Image Available'}
              className={css.productImage}
            />
            <div className={css.productCardName}>{product.name}</div>
            <div className={css.productCardSubtitle}>{product.subtitle}</div>
            <div className={css.productCardPrice}>
              {product.price} 원 {product.discountPrice &&
              <span className={css.discountPrice}>{product.discountPrice} 원</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}