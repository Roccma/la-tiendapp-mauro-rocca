import React from 'react'
import { Card, Typography } from '@mui/material'
import { getCardName } from '../../../helpers'

export const ItemDues = ( { price, max_dues } ) => {
  return (
    <Card 
        variant="outlined" 
        sx = {{p: 3,
                width: '100%'}}>
        { max_dues.map( 
            ( item, idx ) => (
                <div key = { idx } className = { (idx + 1 ) < max_dues.length && 'div-due' || '' }>
                    <img 
                        src = {`/assets/${ item.name }.png`}
                        width='75px'/>
                    <Typography variant="body1" sx = {{ display: 'inline-block', ml: 3, position: 'relative', bottom: '7px' }}>
                        Hasta <b>{ item.dues } cuotas</b> sin interés de <b>$U { Math.ceil( price / item.dues ) }</b> con { getCardName( item.name ) }
                    </Typography>
                    { (idx + 1 ) < max_dues.length && <hr /> }
                    
                </div>
            )
        ) }
    </Card>
  )
}
