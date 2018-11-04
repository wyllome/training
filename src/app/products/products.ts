export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  price: number;
  releaseDate: string;
  description: string;
  starRating: number;
  imageUrl: string;
}

export class Product implements IProduct {

  constructor (
    public productId: number,
    public productName: string,
    public productCode: string,
    public price: number,
    public releaseDate: string,
    public description: string,
    public starRating: number,
    public imageUrl: string) {}

  calculateDiscount(percent: number): number {
    return this.price - (this.price * percent / 100);
  }

  }
