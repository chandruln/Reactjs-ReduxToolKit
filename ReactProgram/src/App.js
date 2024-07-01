import React, { useState } from 'react'
import folderExplorer from './RecursiveMapFolderProgram/folderData';
import Folder from './RecursiveMapFolderProgram/Folder';
import Mapprogram from './mapProgram/Mapprogram';
import Pagination from './Pagination/Pagination';
import ShoppingCart from './ShoppingCart/ShoppingCart';

export default function App() {
  const [explorerData, setExplorerData] = useState(folderExplorer);
  return (
    <div>
      <h3>Shoping Cart, ADD_PRODUCTS_TO_CART, Increase QTY, Sub Total Change</h3>
      <ShoppingCart/>
      <h3>Display products using MAP</h3>
      <Mapprogram/>
      <h3>Display Folder and Files using Recursive MAP</h3>
      <p><Folder explorer={explorerData}/></p>
      <h3>Pagination</h3>
      <Pagination/>
    </div>
  )
}
