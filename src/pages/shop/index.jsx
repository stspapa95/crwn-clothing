import React from 'react';
import {SHOP_DATA as collection}  from "./shopData";
import {Box} from "@mui/material";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";

function ShopPage() {
   return (
      <Box style={{padding:'20px 60px'}}>
         {collection.map(({id, title, items})=> <Box key={id} mb={5}>
            <PreviewCollection title={title} items={items} />
         </Box>)}
      </Box>
   )
}

export default ShopPage;