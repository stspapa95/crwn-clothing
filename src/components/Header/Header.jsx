import React from 'react';
import {Box} from "@mui/material";
import {Link} from "react-router-dom";

import bag from '../../assets/24 - Bag.svg';
import logo from '../../assets/crown.svg';
import classes from './header.module.css';
import MainButton from "../@core/MainButton/MainButton";


function Header () {

   return (
      <Box display={"flex"} mb={4}>
         <Link to={"/"}>
            <Box>
               <img src={logo} alt={""} style={{paddingLeft: 20, cursor:'pointer'}} />
            </Box>
         </Link>
         <Box display={"flex"} alignItems={"center"} justifyContent={"center"} style={{marginLeft:'auto'}}>
            <Link to={"/shop"} className={classes.link}>
               <MainButton fontSize={"13px"} padding={'0 20px 0 20px'} backgroundHover={'rgba(45, 45, 45, 0.04)'} title={"Shop"} />
            </Link>
            <MainButton fontSize={"13px"} padding={'0 20px 0 20px'} backgroundHover={'rgba(45, 45, 45, 0.04)'} title={"Contact"} />
            <MainButton fontSize={"13px"} padding={'0 20px 0 20px'} backgroundHover={'rgba(45, 45, 45, 0.04)'} title={"Sign in"} />
            <Box style={{paddingLeft: 20}}>
               <img src={bag} alt={""} style={{cursor:'pointer'}} />
            </Box>
         </Box>
      </Box>
   )
}

export default Header;