export interface Figurines{
    id: number;
    name: string;
    description: string;
    price: number;
    tag: string;
    image: {
        src: string;
        alt: string;
    }
}