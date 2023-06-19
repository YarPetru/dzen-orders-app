import { getFormattedCost } from 'helpers';
import React from 'react';
import { IPrice } from 'types';

interface IPriceBlock {
  priceUsd: IPrice;
  priceUah: IPrice;
}

const PriceBlock: React.FC<IPriceBlock> = ({ priceUsd, priceUah }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="subparagraph">{getFormattedCost(priceUsd)}</p>
      <p>{getFormattedCost(priceUah)}</p>
    </div>
  );
};

export default PriceBlock;
