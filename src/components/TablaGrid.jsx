import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState,useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import { Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      
    },
  });
  

//efecto de transicion
const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    transform: scale(1.3);
  }
  `}
`;

export default function TableGrid() {

    // api traer data
    const [products, setProducts] = useState([])

const endpoint = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

const getData = async() =>{
   await axios.get(endpoint).then((response)=>{
     const data=response.data
     console.log(data)
     setProducts(data)
   })
}
 useEffect(()=>{
   getData()
 },[])

 //columnas
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'NOMBRE', width: 90 },
  {
    field: 'image',
    headerName: 'LOGO',
    width: 150,
    renderCell:(params)=><StyledAvatar><Avatar src={params.row.image}/></StyledAvatar>,
    editable: true,
  },
  { field: 'symbol', headerName: 'SIMBOLO', width: 90 },
  { field: 'current_price', headerName: 'PRECIO', width: 100 },
  { field: 'price_change_24h', headerName: 'Market', width: 100 },
 
];

  return (
    <>
    <h1>CRYPTOMONEDAS</h1>
    <Box sx={{  height: 650, width: '100%' , backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
     <ThemeProvider theme={darkTheme}>
     
      <DataGrid
        tittle='Criptomonedas'
        rows={products}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      
      />
    </ThemeProvider>  
    </Box>
  
  </>

  );
}