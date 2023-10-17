import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Import your image file
import frozenYoghurtImage from './subdirectory/my.png';


function createData(name, stock, price, totalSales) {
  return { name, stock, price, totalSales };
}

const rows = [
  createData('Abstract 3D', '32 in stock', '$45.99', 20),
  createData('Sarphens Illustration', '32 in stock', '$45.99', 20),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={frozenYoghurtImage} alt="Frozen Yoghurt" style={{ width: '80px', height: '50px', marginRight: '10px' ,borderRadius: '10px'}} />
                  {row.name}
                </div>
              </TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.totalSales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
