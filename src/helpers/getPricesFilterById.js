import React from 'react'

export const getPricesFilterById = ( price ) => {
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

    return { min, max };
}
