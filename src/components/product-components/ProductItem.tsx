import React from 'react';
import classNames from 'classnames';
import { HiTrash } from 'react-icons/hi';
import { getFormattedDate } from 'helpers';
import { Button, DateBlock, PriceBlock } from 'components/common';
import { IProduct } from 'types';

interface IProductItem {
  product: IProduct;
  isShort?: boolean;
  handleDeleteProduct: () => void;
}

const ProductItem: React.FC<IProductItem> = ({ product, isShort, handleDeleteProduct }) => {
  const indicatorClasses = classNames('w-4 h-4 rounded-full ', {
    'bg-accent-main': product.isAvailable,
    'bg-biege-main': !product.isAvailable,
  });

  const date = new Date(product.date);
  const startDate = new Date(product.guarantee.start);
  const endDate = new Date(product.guarantee.end);

  return (
    <div className="item text-xs hover:shadow-lg transition-all">
      <div className={indicatorClasses}></div>

      <img src={product.photo} alt="product cover" className="h-12 w-16 object-cover" />

      <div className="flex flex-col gap-0">
        <h3>{product.title}</h3>
        <p className="subparagraph">{product.specification}</p>
      </div>

      {product.isAvailable ? (
        <p className="text-accent-main">Available</p>
      ) : (
        <p className="text-black">Repaired</p>
      )}

      {product.isNewProduct && <p>New</p>}

      {!isShort && (
        <>
          <div className="flex flex-col gap-0">
            <div className="flex gap-2  items-center">
              <p className="subparagraph">from</p>
              <p>{getFormattedDate(startDate, 'isGuarantee')}</p>
            </div>

            <div className="flex gap-2 items-center">
              <p className="subparagraph">to</p>
              <p>{getFormattedDate(endDate, 'isGuarantee')}</p>
            </div>
          </div>
          <PriceBlock priceUsd={product.price[0]} priceUah={product.price[1]} />
          <p>Group title</p>
          <p>Author title</p>
          <p>Order title</p>
          <DateBlock date={date} />
          <Button isRounded onClick={handleDeleteProduct}>
            <HiTrash size="20" />
          </Button>
        </>
      )}
    </div>
  );
};

export default ProductItem;
