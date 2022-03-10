import React from 'react';
import MainButton from "../@core/MainButton/MainButton";
import Text from "../@core/Text/Text";
import classes from "./MenuItem.module.css";

function MenuItem({title, image, large}) {

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
            <MainButton title={"SHOP NOW"}/>
         </div>
      </div>
   )
}

export default MenuItem;