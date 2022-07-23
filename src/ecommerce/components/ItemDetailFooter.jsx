import React from 'react'
import { Card, Grid, Typography } from '@mui/material'
import { AccountBalanceWalletRounded, TravelExploreRounded, LocalAtmRounded, InsertEmoticonRounded } from '@mui/icons-material';

export const ItemDetailFooter = () => {
  return (
    <Card variant="outlined" 
        sx = {{p: 3,
                mt: 3,
                mb: 5,
                ml: 5,
                mr: 5,
                width: '100%'}}>
        <Grid container>
            <Grid item xs = {3}
                align = 'center'>
                <AccountBalanceWalletRounded 
                    sx = {{ fontSize: 32 }} color = 'primary'/>
                <Typography variant = 'body2' color = 'primary'>Cuidá tu bolsillo</Typography>
            </Grid>
            <Grid item xs = {3}
                align = 'center'>
                <TravelExploreRounded 
                    sx = {{ fontSize: 32 }} color = 'primary'/>
                <Typography variant = 'body2' color = 'primary'>Encontrá lo que buscás</Typography>
            </Grid>
            <Grid item xs = {3}
                align = 'center'>
                <LocalAtmRounded 
                    sx = {{ fontSize: 32 }} color = 'primary'/>
                <Typography variant = 'body2' color = 'primary'>Comprá barato</Typography>
            </Grid>
            <Grid item xs = {3}
                align = 'center'>
                <InsertEmoticonRounded 
                    sx = {{ fontSize: 32 }} color = 'primary'/>
                <Typography variant = 'body2' color = 'primary'>Ayudá a emprendedores</Typography>
            </Grid>
        </Grid>
    </Card>
  )
}
