import React from 'react'
import {Box, Grid} from "@mui/material";

function CollectionItem({title, image, price}) {
   return (
      <Box>
         <Box style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '350px'
         }}>
         </Box>
         <Grid container mt={1}>
            <Grid item lg={6} md={6} style={{fontSize: 14}}>
               {title}
            </Grid>
            <Grid item lg={6} md={6} display={"flex"} justifyContent={"flex-end"} style={{fontSize: 14}}>
               {`${price}$`}
            </Grid>
         </Grid>
      </Box>
   )
}

export default CollectionItem;