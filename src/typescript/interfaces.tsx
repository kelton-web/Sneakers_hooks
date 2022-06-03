export interface IProduct {
    id: string,
    brand: string,
    title: string,
    desc: string,
    price: string,
    likes?: any
    size?: number | string,
    stocked: string,
    photo?: any,
}