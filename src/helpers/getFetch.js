import { products } from "../data/products";

export const getFetch = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        if( id ) {
            setTimeout(
                () => {
                    const filteredProduct = products.data.find(
                        product => {
                            return product.id === id;
                        }
                    );
                    resolve( filteredProduct )
                },
                2000
            );
        }
        else{
            setTimeout(
                () => {
                    const filteredProducts = products.data.filter(
                        product => {
                            return product.outstanding;
                        }
                    );
                    resolve( filteredProducts );
                },
                3000
            );
        }
    } );
}