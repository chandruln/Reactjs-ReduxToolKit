import React, { useState } from 'react'
import folderExplorer from './RecursiveMapFolderProgram/folderData';
import Folder from './RecursiveMapFolderProgram/Folder';
import Mapprogram from './mapProgram/Mapprogram';

export default function App() {
  const [explorerData, setExplorerData] = useState(folderExplorer);
  return (
    <div>
      <h3 style={{color: "red"}}>Display products using MAP</h3>
      <Mapprogram/>
      <h3 style={{color: "red"}}>Display Folder and Files using Recursive MAP</h3>
      <p><Folder explorer={explorerData}/></p>
    </div>
  )
}
