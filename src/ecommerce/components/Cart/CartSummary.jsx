import React from 'react'
import { Button, Card, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import { ShoppingBagRounded } from '@mui/icons-material'

export const CartSummary = ( { total, buyer, setBuyer, onSubmitEndShop } ) => {

  const { conditionsAccepted } = buyer;

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
    <Card variant="outlined" 
          sx = {{ width: '100%',
                  p: 3,
                  ml: 3 }}>
          <Typography variant = 'h5'   sx = {{ fontSize: 28 }}>Resumen</Typography>
          <hr />
          <Grid container sx = {{ mt: 3 }}>
            <Grid item xs = {7}>
              <Typography variant = 'body1'>Subtotal</Typography>
            </Grid>
            <Grid item xs = {5} align='end'>
              <Typography variant = 'body1'>$U { total }</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs = {7}>
              <Typography variant = 'body2'>Descuento</Typography>
            </Grid>
            <Grid item xs = {5} align='end' color = '#04a308'>
              <Typography variant = 'body2'>-$U 0</Typography>
            </Grid>
          </Grid>
          <Grid container sx = {{ mt: 1 }}>
            <Grid item xs = {7}>
              <Typography variant = 'h6'>Total</Typography>
            </Grid>
            <Grid item xs = {5} align='end'>
              <Typography variant = 'h6'>$U { total }</Typography>
            </Grid>
          </Grid>
          <Typography variant = 'h5'   sx = {{ fontSize: 28, mt: 5 }}>Cliente</Typography>
          <hr />
          <Grid container>
              <Grid item sm = {6}  sx = {{ mt: 3, pr: 1 }}>
                  <TextField label="Nombre" variant="outlined" name = "name" onKeyUp = { handleChange } fullWidth />
              </Grid>
              <Grid item sm = {6}  sx = {{ mt: 3, pl: 1 }}>
                  <TextField label="Apellido" variant="outlined" name = "lastname" onKeyUp = { handleChange } fullWidth />
              </Grid>
              <Grid item sm = {12} sx = {{ mt: 3 }}>
                  <TextField label="Teléfono" variant="outlined" name = "phone" onKeyUp = { handleChange } fullWidth />
              </Grid>
              <Grid item sm = {12} sx = {{ mt: 3 }}>
                  <TextField label="E-mail" variant="outlined" name = "email" onKeyUp = { handleChange } fullWidth />
              </Grid>
              <Grid item sm = {12} sx = {{ mt: 3 }}>
                  <TextField label="Confirmar e-mail" variant="outlined" name = "confirmEmail" onKeyUp = { handleChange } fullWidth />
              </Grid>
              <Grid item sm = {12} sx = {{ mt: 3 }}>
                <FormControlLabel
                  control={<Checkbox />} 
                  label= "Acepto los términos y condiciones"  
                  name = "conditionsAccepted"
                  checked = { conditionsAccepted }
                  onChange = { hangleChangeConditionsAccepted }
                  sx = {{ display: 'block' }}/>
              </Grid>
          </Grid>
          <Button
              variant="contained"
              elevation = { 0 }
              sx = {{ color: 'white',
                      boxShadow: 0,
                      width: '100%',
                      mt: 4}}
              onClick = { () => onSubmitEndShop( buyer ) }>
              <ShoppingBagRounded sx = {{ mr: 2 }}/>Finalizar compra
          </Button>
    </Card>
  )
}
