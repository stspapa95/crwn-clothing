import React from 'react';
import {Typography} from "@mui/material";

function Text({children}) {
   return (
      <Typography
         style={{
            fontFamily: 'Gotham Bold, sans-serif',
            marginBottom: 10,
            color: '#d3d3d3',
            fontSize: 18
         }}>
         {children}
      </Typography>
   )
}

export default Text;