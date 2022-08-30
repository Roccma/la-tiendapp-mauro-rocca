import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'
import { ExpandMoreRounded, FavoriteBorderRounded, LogoutRounded } from '@mui/icons-material'
import Popover from '@mui/material/Popover';
import { useAuth0 } from '@auth0/auth0-react';

export const UserWidget = ( { given_name, email, picture } ) => {
  const [anchorEl, setAnchorEl] = useState(null);

  fetch( picture )
    .then(resp => resp.json())
    .then( data => console.log(data) );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { logout } = useAuth0();

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
      <>
        <Button
            sx={{ 
                color: 'white',
                ml: 3,
                textTransform: 'none'
            }}
            onClick={handleClick}>
            <img src = { picture } className='img-user'/>
            <Typography>{ given_name ? given_name : email }</Typography>
            <ExpandMoreRounded />
        </Button>
        <Popover
            
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 2
            }}
        >
            <Button
                sx = {{ textTransform: 'none',
                        padding: '5px 10px',
                        width: '100%',
                        textAlign: 'left' }}>
                <FavoriteBorderRounded />
                <Typography variant='body1' sx = {{ m: 1 }}>Lista de deseos</Typography>   
            </Button>
            <br/>
            <Button
                sx = {{ textTransform: 'none',
                        padding: '5px 10px',
                        width: '100%',
                        justifyContent: 'flex-start'}}>
                <LogoutRounded />
                <Typography 
                    variant='body1' 
                    sx = {{ m: 1 }}
                    onClick={() => logout({ returnTo: window.location.origin })}>Logout</Typography>    
            </Button>
        </Popover>
    </>
  )
}
