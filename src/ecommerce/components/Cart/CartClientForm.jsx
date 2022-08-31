import { ArrowBackRounded, PaymentRounded } from '@mui/icons-material'
import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export const CartClientForm = ( { handleGoBackStep, handleGoToPay } ) => {

  const [ buyer, setBuyer ] = useState({
                                    name: '',
                                    lastname: '',
                                    phone: '',
                                    email: '',
                                    confirmEmail: '',
                                    conditionsAccepted: false
                                }); 
    
  const handleChange = (event) => {
      setBuyer({
        ...buyer,
        [ event.target.name ] : event.target.value
      });
    }
  
    const hangleChangeConditionsAccepted = () => {
      setBuyer({
        ...buyer,
        conditionsAccepted : !buyer.conditionsAccepted
      });
    }

  return (
    <>  
            <Grid item sm = { 12 } sx = {{ mt: 3 }}>
                <Typography variant = 'h5' align='center'>Ingrese los datos del cliente</Typography>
            </Grid>
            <Grid item sm = {6}  sx = {{ pr: 2 }}>
                <TextField label="Nombre" variant="outlined" name = "name" onChange = { handleChange }  fullWidth />
            </Grid>
            <Grid item sm = {6}  sx = {{ pl: 2 }}>
                <TextField label="Apellido" variant="outlined" name = "lastname" onChange = { handleChange }  fullWidth />
            </Grid>
            <Grid item sm = {6} sx = {{ pr: 2 }}>
                <TextField label="E-mail" variant="outlined" name = "email" onChange = { handleChange }  fullWidth />
            </Grid>
            <Grid item sm = {6} sx = {{ pl: 2 }}>
                <TextField label="Confirmar e-mail" variant="outlined" name = "confirmEmail" onChange = { handleChange }  fullWidth />
            </Grid>
            <Grid item sm = {12}>
                <TextField label="Teléfono" variant="outlined" name = "phone" onChange = { handleChange }  fullWidth />
            </Grid>
            <Grid item sm = {12}>
                <FormControlLabel
                    control={<Checkbox />} 
                    label= "Acepto los términos y condiciones"  
                    name = "conditionsAccepted"
                    checked = { buyer.conditionsAccepted }
                    onChange = { hangleChangeConditionsAccepted }
                    sx = {{ display: 'block' }}/>
            </Grid>
            <Grid item sm = {6}  sx = {{ pr: 2 }}>
                <Button 
                    variant = 'outlined' 
                    fullWidth
                    sx = {{ fontSize: 14, pt: 1, pb: 1 }}
                    onClick = { handleGoBackStep }>
                    <ArrowBackRounded className = 'menu-icon-orange'/>&nbsp;Atrás
                </Button>
            </Grid>
            <Grid item sm = {6}  sx = {{ pl: 2 }}>
                <Button 
                    variant = 'contained' 
                    fullWidth
                    elevation = { 0 }
                    sx = {{ color: 'white', fontSize: 14, pt: 1, pb: 1 }}
                    onClick = { () => handleGoToPay( buyer ) }>
                    Ir a pagar
                    &nbsp;
                    <PaymentRounded className = 'menu-icon'/>
                </Button>
            </Grid>
    </>
  )
}
