import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { MenuRounded, HomeRounded, LocalPizzaRounded, CakeRounded, PaletteRounded, CheckroomRounded, CleaningServicesRounded, EventAvailableRounded } from '@mui/icons-material'
import React from 'react'
import { EcommercePage } from '../pages/EcommercePage'
import { Box } from '@mui/system'

export const Navbar = () => {

  const menuItems = [
    {
      name: 'Home',
      icon: <HomeRounded className = 'menu-icon'/>,
      to: <EcommercePage />
    },
    {
      name: 'Comidas',
      icon: <LocalPizzaRounded className = 'menu-icon'/>,
      to: <EcommercePage />
    },
    {
      name: 'Pastelería',
      icon: <CakeRounded className = 'menu-icon'/>,
      to: <EcommercePage />
    },
    {
      name: 'Artesanías',
      icon: < PaletteRounded className = 'menu-icon'/>,
      to: <EcommercePage />
    },
    {
      name: 'Ropa',
      icon: <CheckroomRounded className = 'menu-icon'/>,
      to: <EcommercePage />
    },
    {
      name: 'Servicios',
      icon: <CleaningServicesRounded className = 'menu-icon'/>,
      to: <EcommercePage />
    },
    {
      name: 'Eventos',
      icon: <EventAvailableRounded className = 'menu-icon'/>,
      to: <EcommercePage />
    }
  ]

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
            <img 
              src="/assets/la-tiendapp-logo-menu.png" 
              alt="La TiendApp" 
              className='img-logo'
            />
            <Grid container
                direction = 'row'
                justifyContent = 'space-between'
                alignItems = 'center'>
                
                <Box sx={{ flexGrow: 1, 
                            display: { xs: 'none', md: 'flex' },
                            ml: '200px'}}>
                {menuItems.map((item) => (
                  <Button
                    key={item.name}
                    sx={{ 
                      color: 'white', 
                      display: 'block',
                      ml: 3
                    }}
                  >
                    {item.icon}
                    {item.name}
                  </Button>
                ))}
          </Box>
            </Grid>
        </Toolbar>

    </AppBar>
  )
}
