import React, { useEffect } from 'react';
import classNames from 'classnames';
import ProductItem from './ProductItem';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchProducts, getProducts } from 'store/products';

interface IProductList {
  orderID?: number;
  isForDetails?: boolean;
}

const ProductList: React.FC<IProductList> = ({ isForDetails, orderID }) => {
  const listWrapperClasses = classNames('w-full', {});
  const listClasses = classNames('w-full flex flex-col gap-6', {});

  const dispatch = useAppDispatch();
  const { data: products, isLoading, error } = useAppSelector(getProducts);

  const filteredProducts = !!orderID ? products.filter(prod => prod.order === orderID) : products;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let renderedProducts;

  if (isLoading) {
    renderedProducts = <h2>Loading...</h2>;
  } else if (error) {
    renderedProducts = <h2>Something went wrong...{error}</h2>;
  } else if (products) {
    renderedProducts =
      filteredProducts.length > 0 ? (
        filteredProducts?.map(product => (
          <ProductItem
            product={product}
            isShort={isForDetails}
            key={product.id}
            // order={order}
            // onClick={() => onOrderClick(order)}
            // isOpenDetails={openDetails}
          />
        ))
      ) : (
        <h3>This order is empty. You can delete it or add a product</h3>
      );
  }

  return (
    <div className={listWrapperClasses}>
      <ul className={listClasses}>{renderedProducts}</ul>
    </div>
  );
};

export default ProductList;
