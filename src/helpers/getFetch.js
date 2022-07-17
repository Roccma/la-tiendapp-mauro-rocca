import { products } from "../data/products";

export const getFetch = () => {
    return new Promise( ( resolve, reject ) => {
        setTimeout(
            () => resolve( products ),
            3000
        )
    } );
}