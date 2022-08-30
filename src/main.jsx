import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartProvider'
import { firebaseConnections } from './firebase/config'
import { LaTiendaApp } from './LaTiendApp'
import './styles.css'

firebaseConnections();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <CartProvider>
                <Auth0Provider
                    domain="dev--d5ccw5m.us.auth0.com"
                    clientId="XOOa6lTCoIh8EfC742VeRzDTiTW4q58j"
                    redirectUri={window.location.origin}>
                    <LaTiendaApp />
                </Auth0Provider>
            </CartProvider>
        </BrowserRouter>
    </React.StrictMode>
)
