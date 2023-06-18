import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchProducts, getProducts } from 'store/products';
import ProductFilter from './ProductFilter';
import ProductItem from './ProductItem';
import { Skeleton } from 'components/common';

interface IProductList {
  orderID?: number;
  isForDetails?: boolean;
}

const ProductList: React.FC<IProductList> = ({ isForDetails, orderID }) => {
  const listWrapperClasses = classNames('w-full', {});
  const listClasses = classNames('w-full flex flex-col gap-6', {});

  const [currentType, setCurrentType] = useState<string>('');

  const dispatch = useAppDispatch();
  const { data: products, isLoading, error } = useAppSelector(getProducts);

  const filteredProducts = products.filter(prod => {
    if (!!orderID && prod.order !== orderID) {
      return false;
    }
    if (!!currentType && prod.type !== currentType) {
      return false;
    }
    return true;
  });

  const typesArray = products
    .filter((prod, index, array) => {
      return array.findIndex(p => p.type === prod.type) === index;
    })
    .map(prod => prod.type);

  let renderedProducts;

  if (isLoading) {
    renderedProducts = <Skeleton times={5} flexCol className="h-[89px] w-full" />;
  } else if (error) {
    renderedProducts = <h2>Something went wrong...{error}</h2>;
  } else if (products) {
    renderedProducts =
      filteredProducts.length > 0 ? (
        filteredProducts?.map(product => (
          <ProductItem product={product} isShort={isForDetails} key={product.id} />
        ))
      ) : (
        <h3>This order is empty. You can delete it or add a product</h3>
      );
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="w-full flex-col-start gap-6 ">
      {!isForDetails && (
        <ProductFilter
          totalQuantity={filteredProducts.length}
          types={typesArray}
          currentType={currentType}
          setCurrentType={setCurrentType}
        />
      )}

      <div className={listWrapperClasses}>
        <ul className={listClasses}>{renderedProducts}</ul>
      </div>
    </div>
  );
};

export default ProductList;
