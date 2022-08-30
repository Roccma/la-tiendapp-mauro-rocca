const mercadoPago = require('mercadopago');
require('dotenv').config();

mercadoPago.configure({
    access_token: process.env.ACCESS_TOKEN
});

module.exports = {
    mercadoPago
}