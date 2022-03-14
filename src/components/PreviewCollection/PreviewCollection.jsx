import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import CollectionItem from "../CollectionItem/CollectionItem";

function PreviewCollection({items, title}) {

   return (
      <Box>
         <Typography style={{fontFamily: 'Chronicle Bold, sans-serif', fontSize: 20, marginBottom: 18}}>{title.toUpperCase()}</Typography>
         <Grid container spacing={3}>
            {items.slice(0,4).map(({id, name, imageUrl, price})=> <Grid item lg={3} md={3} key={id}>
               <CollectionItem title={name} image={imageUrl} price={price}/>
            </Grid>)}
         </Grid>
      </Box>
   )
}

export default PreviewCollection;