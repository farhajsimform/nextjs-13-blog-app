export interface IProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  images: Array<string>;
}

export interface IAllProducts {
  products: Array<IProducts>;
}
