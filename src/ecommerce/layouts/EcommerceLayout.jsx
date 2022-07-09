import React from 'react'
import { Box } from '@mui/system'
import { Navbar } from '../components';
import { Toolbar } from '@mui/material';

export const EcommerceLayout = ( { children } ) => {
  return (
    <Box sx = {{ display: 'flex' }}>
        <Navbar />
        <Box
            component = "main"
            sx = {{ flexGrow: 1}}>
            <Toolbar />
            { children }
        </Box>
    </Box>
  )
}
