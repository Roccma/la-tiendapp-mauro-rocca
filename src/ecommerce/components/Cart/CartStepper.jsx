import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

export const CartStepper = () => {
  const steps = [
    'Detalle de facturación',
    'Método de pago',
    'Realizar pago'
  ];

  return (
    <Stepper activeStep={0} alternativeLabel sx = {{ position: 'relative', left: '14%' }}>
    {steps.map((label) => (
      <Step key={label}>
        <StepLabel>{label}</StepLabel>
      </Step>
    ))}
  </Stepper>
  )
}
