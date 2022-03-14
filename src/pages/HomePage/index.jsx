import React from 'react';
import {Box, Grid} from "@mui/material";
import MenuItem from "../../components/MenuItem/MenuItem";
import {productTypes, gender} from './data';

function HomePage() {

   return (
      <Box style={{padding: '20px 80px'}}>
         <Grid container spacing={1}>
            {productTypes.map((product) => <Grid item lg={4} md={4} key={product.id}>
               <MenuItem title={product.title} image={product.image} link={product.url}/>
            </Grid>)}
         </Grid>
         <Box mt={1}/>
         <Grid container spacing={1}>
            {gender.map((product)=> <Grid item lg={6} md={6} key={product.id}>
               <MenuItem title={product.title} image={product.image} large link={product.url}/>
            </Grid>)}
         </Grid>
      </Box>
   )
}

export default HomePage;