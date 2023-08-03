import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import { useState } from "react";
import agent from "../../app/api/agent";
import { LoadingButton } from "@mui/lab";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { setBasket } from "./basketSlice";

export default function BasketPage(){
  
    const {basket, status} = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();



    if (!basket) return <Typography variant="h3">Your basket is empty</Typography>

    return(
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="right">Subtotal</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basket.items.map((item) => (
                <TableRow key={item.productId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  
                  <TableCell component="th" scope="row">
                    <Box display='flex' alignItems='center'>
                      <img src={item.pictureUrl} alt={item.name} style={{height: 50, marginRight: 20}}/>
                      <span>{item.name}</span>
                    </Box>
                  </TableCell>

                  <TableCell align="right">${(item.price / 100).toFixed(2)}</TableCell>

                  <TableCell align="center">
                    <LoadingButton 
                      loading={status.includes()} 
                      onClick={() => handleRemoveItem(item.productId , 1, 'rem' + item.productId)} 
                      color='error'>
                      <Remove/>
                    </LoadingButton>

                    {item.quantity}

                    <LoadingButton 
                      loading={status.loading && status.name === 'add' + item.productId} 
                      onClick={() => handleAddItem(item.productId , 'add' + item.productId)} 
                      color='success'>
                      <Add/>
                    </LoadingButton>
                  </TableCell>

                  <TableCell align="right">${((item.price / 100) * item.quantity).toFixed(2)}</TableCell>

                  <TableCell align="right">
                    <LoadingButton 
                      loading={status.loading && status.name === 'del' + item.productId} 
                      onClick={() => handleRemoveItem(item.productId , item.quantity, 'del' + item.productId)} 
                      color='error'>
                      <Delete />
                    </LoadingButton>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container>
          <Grid item xs={6} border={"1px solid black"}></Grid>
          <Grid item xs={6} border={"1px solid black"}>
            <BasketSummary/>
            <Button 
              component={Link} 
              to='/checkout' 
              variant='contained' 
              size='large' 
              fullWidth
            >
              Checkout
            </Button>
          </Grid>
        </Grid>
      </>
    )
}