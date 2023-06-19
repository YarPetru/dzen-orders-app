import { IProduct, IOrder } from 'types';

export const calculateTotal = (products: IProduct[], order: IOrder, symbol: 'USD' | 'UAH') => {
  return products
    .filter(prod => prod.order === order._id)
    .reduce(
      (total, prod) => {
        const price = prod.price.find(p => p.symbol === symbol);
        if (price) {
          total.value += price.value;
        }
        return total;
      },
      { value: 0, symbol, isDefault: symbol === 'UAH' ? (1 as const) : (0 as const) }
    );
};

export const totalProductAmount = (products: IProduct[], order: IOrder) => {
  return products.reduce((amount, prod) => (prod.order === order._id ? (amount += 1) : amount), 0);
};
