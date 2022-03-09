import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import classes from './HomePage.module.css';

function HomePage() {

   return (
      <Box className={classes.container}>
         <Grid container spacing={1}>
            <Grid item lg={4} md={4}>
               <Box className={classes.menuItem}>
                  <Typography style={{fontFamily:'Gotham Bold', marginBottom: '5px'}}>HATS</Typography>
                  <Button className={classes.button} disableRipple>SHOP NOW</Button>
               </Box>
            </Grid>
            <Grid item lg={4} md={4}>
               <Box className={classes.menuItem}>
                  <Typography style={{fontFamily:'Gotham Bold', marginBottom: '5px'}}>JACKETS</Typography>
                  <Button className={classes.button} disableRipple>SHOP NOW</Button>
               </Box>
            </Grid>
            <Grid item lg={4} md={4}>
               <Box className={classes.menuItem}>
                  <Typography style={{fontFamily:'Gotham Bold', marginBottom: '5px'}}>SNEAKERS</Typography>
                  <Button className={classes.button} disableRipple>SHOP NOW</Button>
               </Box>
            </Grid>
         </Grid>
         <Box mt={1} />
         <Grid container spacing={1}>
            <Grid item lg={6} md={6}>
               <Box className={classes.menuItem}>
                  <Typography style={{fontFamily:'Gotham Bold', marginBottom: '5px'}}>WOMENS</Typography>
                  <Button className={classes.button} disableRipple>SHOP NOW</Button>
               </Box>
            </Grid>
            <Grid item lg={6} md={6}>
               <Box className={classes.menuItem}>
                  <Typography style={{fontFamily:'Gotham Bold', marginBottom: '5px'}}>MENS</Typography>
                  <Button className={classes.button} disableRipple>SHOP NOW</Button>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

export default HomePage;