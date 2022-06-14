import React from 'react';
import {Box} from "@mui/material";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";
import {SHOP_DATA as collection}  from "./shopData";

function ShopPage() {
   return (
      <Box>
         {collection.map(({id, title, items})=> <Box key={id} mb={5}>
            <PreviewCollection title={title} items={items} />
         </Box>)}
      </Box>
   )
}

export default ShopPage;