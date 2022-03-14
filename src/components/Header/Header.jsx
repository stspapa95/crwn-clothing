import React from 'react';
import {Box, Button} from "@mui/material";
import {useNavigate} from "react-router";

import bag from '../../assets/24 - Bag.svg';
import logo from '../../assets/crown.svg';


function Header () {
   const navigate = useNavigate();

   const handleClick= () => {
      navigate('/')
   }

   return (
      <Box display={"flex"} mb={4}>
         <Box>
            <img src={logo} alt={""} style={{paddingLeft: 20, cursor:'pointer'}} onClick={handleClick}/>
         </Box>
         <Box display={"flex"} alignItems={"center"} justifyContent={"center"} style={{marginLeft:'auto'}}>
            <Button disableRipple onClick={()=> {navigate('/shop')}} style={{fontFamily:'Gotham Book, sans-serif', fontSize: 13, color:'#2D2D2D', padding:'0 20px 0 20px'}}>
               SHOP
            </Button>
            <Button disableRipple style={{fontFamily:'Gotham Book, sans-serif', fontSize: 13, color:'#2D2D2D', padding:'0 20px 0 20px'}}>
               CONTACT
            </Button>
            <Button disableRipple style={{fontFamily:'Gotham Book, sans-serif', fontSize: 13, color:'#2D2D2D', padding:'0 20px 0 20px'}}>
               SIGN IN
            </Button>
            <Box style={{paddingLeft: 20}}>
               <img src={bag} alt={""} style={{cursor:'pointer'}} />
            </Box>
         </Box>
      </Box>
   )
}

export default Header;