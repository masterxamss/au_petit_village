export interface Figurines{
    id: number;
    name: string;
    description: string;
    price: number;
    tag: string;
    material: string;
    dimension: string;
    weight: string;
    specimens: string;
    image: {
        src: string;
        alt: string;
    }
}