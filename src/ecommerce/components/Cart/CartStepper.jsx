import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import { useCartContext } from '../../../context/CartProvider';

export const CartStepper = () => {
  const steps = [
    'Detalle de facturación',
    'Datos del comprador',
    'Confirmación de compra'
  ];

  const { step } = useCartContext();

  return (
    <Stepper activeStep={ step } alternativeLabel sx = {{ position: 'relative', left: '14%' }}>
    {steps.map((label) => (
      <Step key={label}>
        <StepLabel>{label}</StepLabel>
      </Step>
    ))}
  </Stepper>
  )
}
 