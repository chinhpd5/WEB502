interface IProduct{
    id: number | string;
    title: string;
    description:string;
    price: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?:string;
    thumbnail:string;
    images?:string[]
}

export type ProductInput = Omit<IProduct,"id">

export default IProduct;