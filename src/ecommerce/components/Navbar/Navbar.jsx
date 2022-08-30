import React, { useEffect, useState } from 'react'
import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { MenuRounded, HomeRounded, LocalPizzaRounded, CakeRounded, PaletteRounded, CheckroomRounded, CleaningServicesRounded, EventAvailableRounded } from '@mui/icons-material'
import { Box } from '@mui/system'
import { CartWidget } from './CartWidget'
import { LoginWidget } from './LoginWidget'
import { UserWidget } from './UserWidget'
import { useAuth0 } from "@auth0/auth0-react";
import { Link, NavLink } from 'react-router-dom'
import { useCartContext } from '../../../context/CartProvider'

export const Navbar = () => {

  const [ cartQuantity, setCartQuantity ] = useState(0);
  const { cartItems, lastUpdate } = useCartContext();


  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    setItemsQuantity();
  }, [ lastUpdate ])

  const setItemsQuantity = () => {
    let total = 0;
    cartItems.map(
      item => total += item.quantity
    );
    setCartQuantity( total );
  }
  

  const menuItems = [
    {
      name: 'Home',
      icon: <HomeRounded className = 'menu-icon'/>,
      to: '/'
    },
    {
      name: 'Comidas',
      icon: <LocalPizzaRounded className = 'menu-icon'/>,
      to: '/category/1' 
    },
    {
      name: 'Pastelería',
      icon: <CakeRounded className = 'menu-icon'/>,
      to: '/category/2'
    },
    {
      name: 'Artesanías',
      icon: < PaletteRounded className = 'menu-icon'/>,
      to: '/category/3'
    },
    {
      name: 'Ropa',
      icon: <CheckroomRounded className = 'menu-icon'/>,
      to: '/category/4'
    },
    {
      name: 'Servicios',
      icon: <CleaningServicesRounded className = 'menu-icon'/>,
      to: '/category/5'
    },
    {
      name: 'Eventos',
      icon: <EventAvailableRounded className = 'menu-icon'/>,
      to: '/category/6'
    }
  ];

  return (
    <AppBar
        position = 'fixed'
        elevation = { 0 }>
        <Toolbar>
          
            <IconButton
                edge = 'start'
                sx = {{
                    mr: 2,
                    display: {sm: 'none' },
                    color: 'white'
                }}>
                <MenuRounded />
            </IconButton>
            <Link to = '/'>
              <img 
                src="https://i.ibb.co/Sd5Zfpz/la-tiendapp-logo-menu.png" 
                alt="La TiendApp" 
                className='img-logo'
              />
            </Link>
            <Grid container
                direction = 'row'
                justifyContent = 'space-between'
                alignItems = 'center'>
                
                <Box sx={{ flexGrow: 1, 
                            display: { xs: 'none', md: 'flex' },
                            ml: '150px'}}>
                      {menuItems.map((item) => (
                        <Button
                          key={item.name}
                          sx={{ 
                            color: 'white', 
                            ml: 2,
                            textTransform: 'none'
                          }}
                          component={NavLink}
                          to = { item.to }
                        >
                          {item.icon}
                          <Typography variant = 'body1'>{item.name}</Typography>
                        </Button>
                      ))}
                </Box>
          </Grid>
          <CartWidget quantity = { cartQuantity } />
          { isAuthenticated && <UserWidget { ...user } /> || <LoginWidget /> }
        </Toolbar>

    </AppBar>
  )
}
