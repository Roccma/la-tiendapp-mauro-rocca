import { products } from "../data/products";

export const getFetchInCatalog = ( categories, price ) => {
    return new Promise( ( resolve, reject ) => {
        let min = 0;
        let max = 0;

        price = parseInt( price );

        switch( price ){
            case 1:
                min = -1;
                max = -1;
                break;
            case 2: 
                min = -1;
                max = 1000;
                break;
            case 3: 
                min = 999;
                max = 3001;
                break;
            case 4: 
                min = 3000;
                max = 9999;
                break;
        }

        const productsByCategory = products.data.filter(
            product => categories.includes(product.category)
        ); 
        
        let productsByCategoryAndPrice = productsByCategory;

        if( price === 4 ){
            productsByCategoryAndPrice = productsByCategory.filter(
                product => product.price > min
            )
        }

        if( price > 1 && price < 4 ) {
            productsByCategoryAndPrice = productsByCategory.filter(
                product => {
                    return product.price > min && product.price < max 
                } 
            )

        }

        resolve(productsByCategoryAndPrice);
  })
}
