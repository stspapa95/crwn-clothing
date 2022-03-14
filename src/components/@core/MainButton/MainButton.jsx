import React from 'react';
import {Button, styled} from "@mui/material";

function MainButton({title, onClick, padding = "8px 16px", backgroundHover= "transparent", fontSize= "14px" }) {

   const MyButton = styled(Button)( {
      color:'#2D2D2D',
      background: '#FFF',
      padding: padding,
      borderRadius: '1px',
      fontSize: fontSize,
      fontFamily:'Gotham Book, sans-serif',
      '&:hover': {
         background: backgroundHover
      }
   })
   return (
      <MyButton disableRipple onClick={onClick}>{title}</MyButton>
   )
}

export default MainButton;