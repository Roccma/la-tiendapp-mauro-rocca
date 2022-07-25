import React from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export const ItemOwnerDataTable = ( { email, instagram, facebook, celular } ) => {
  return (
    <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" sx = {{ fontWeight: 'bold', fontSize: '22px' }}>E-mail</StyledTableCell>
                <StyledTableCell align="left">{ email }</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" sx = {{ fontWeight: 'bold', fontSize: '22px' }}>Facebook</StyledTableCell>
                <StyledTableCell align="left">{ facebook }</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" sx = {{ fontWeight: 'bold', fontSize: '22px' }}>Instagram</StyledTableCell>
                <StyledTableCell align="left">{ instagram }</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" sx = {{ fontWeight: 'bold', fontSize: '22px' }}>Celular</StyledTableCell>
                <StyledTableCell align="left">{ celular }</StyledTableCell>
              </StyledTableRow>
          </TableBody>
        </Table>
    </TableContainer>
  )
}
