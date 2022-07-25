import React from 'react'
import { Button, Typography } from '@mui/material'
import { AccountCircleRounded } from '@mui/icons-material'
import { useAuth0 } from '@auth0/auth0-react'

//import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export const LoginWidget = () => {

  const { loginWithRedirect } = useAuth0();
  return (
    <Button
        sx={{ 
            color: 'white',
            ml: 2,
            textTransform: 'none'
        }}
        onClick = { () => loginWithRedirect() }>
        <AccountCircleRounded sx= {{ mr: 1 }}/>
        <Typography variant = 'body1'>Login</Typography>
    </Button>
  )
}
