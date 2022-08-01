import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartProvider'
import { LaTiendaApp } from './LaTiendApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <CartProvider>
                <Auth0Provider
                    domain="dev-w-0b99-f.us.auth0.com"
                    clientId="RwjuFJDlmB5whBJMOaRBth8AjaT607Ng"
                    redirectUri={window.location.origin}>
                    <LaTiendaApp />
                </Auth0Provider>
            </CartProvider>
        </BrowserRouter>
    </React.StrictMode>
)
