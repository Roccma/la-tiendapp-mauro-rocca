export const createPreference = ( order ) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer TEST-7082735503952075-082117-2426f540f38ea3fdca7c392d02d4910b-172096048' },
        body: JSON.stringify( order )
    };

    fetch('https://api.mercadopago.com/checkout/preferences', requestOptions)
        .then( response => response.json() )
        .then( data => {
            return data.id;
        } );
}
