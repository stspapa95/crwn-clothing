import React from 'react';
import {Typography} from "@mui/material";

function Text({children}) {
   return (
      <Typography
         style={{
            fontFamily: 'Gotham Bold',
            marginBottom: '10px',
            color: '#d3d3d3',
            fontSize:'18px'
         }}>
         {children}
      </Typography>
   )
}

export default Text;