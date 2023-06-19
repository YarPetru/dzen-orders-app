export interface IPrice {
  value: number;
  symbol: 'USD' | 'UAH';
  isDefault: 0 | 1;
}

export interface IProduct {
  id: number;
  serialNumber: number;
  isNew: 1 | 0;
  isAvailable: 1 | 0;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: {
    start: Date;
    end: Date;
  };
  price: [IPrice, IPrice];
  order: number; //one of ids of the orders
  date: Date;
}

export interface IOrder {
  id: number;
  title: string;
  date: Date;
  description: string;
}
