import React from 'react';
import {useNavigate} from "react-router";

import Button from "../@core/Button/Button";
import Text from "../@core/Text/Text";

import classes from "./MenuItem.module.css";

function MenuItem({title, image, large, link}) {

   const navigate = useNavigate();
   const handleNavigation = () => {
      navigate(link)
   }

   return (
      <div className={classes.container}>
         <div className={classes.menuItem} style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: large ? '50% 5%' : '50% 20%',
            height: large ? '380px' : '240px',
         }}>
            <Text>{title}</Text>
            <Button title={"SHOP NOW"} onClick={handleNavigation} backgroundHover={'rgb(178, 175, 172)'}/>
         </div>
      </div>
   )
}

export default MenuItem;