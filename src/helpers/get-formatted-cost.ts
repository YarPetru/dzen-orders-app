import { IPrice } from 'types';

export const getFormattedCost = (cost: IPrice) => {
  return cost.symbol === 'USD' ? `${cost.value} $` : `${cost.value} ${cost.symbol}`;
};
