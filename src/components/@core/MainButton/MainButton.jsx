import React from 'react';
import {Button, styled} from "@mui/material";

function MainButton({title, onClick}) {

   const MyButton = styled(Button)( {
      color:'#2D2D2D',
      background: '#FFF',
      padding: '8px 16px',
      borderRadius: '1px',
      fontFamily:'Gotham Book, sans-serif',
      '&:hover': {
         background: 'rgb(178, 175, 172)'
      }
   })
   return (
      <MyButton disableRipple onClick={onClick}>{title}</MyButton>
   )
}

export default MainButton;