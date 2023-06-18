import { getFormattedCost } from 'helpers';
import React from 'react';
import { IPrice } from 'types';

interface IPriceBlock {
  price: [IPrice, IPrice];
}

const PriceBlock: React.FC<IPriceBlock> = ({ price }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="subparagraph">{getFormattedCost(price[0])}</p>
      <p>{getFormattedCost(price[1])}</p>
    </div>
  );
};

export default PriceBlock;
