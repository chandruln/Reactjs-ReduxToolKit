import React, {useState} from 'react'
import "./style.css";

export default function Folder({ explorer}) {
  console.log(explorer)
  const [expand, setExpand] = useState(false)
  const [showInput, setShowInput] = useState({
    visible:false,
    isFolder:null
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
        visible: true,
        isFolder
    })
  }

  const onAddFolder = (e) => {
    console.log(e.target.value)
    if(e.keyCode === 13 && e.target.value){
        setShowInput({...showInput, visible:false})
    }
  }

  if(explorer.isFolder){
    return (
        <div style={{marginTop: 4}}>
            <div className='folder' onClick={() => setExpand(!expand)}>
                <span>
                    + {explorer.name}
                </span>
                <div>
                    <button onClick={(e)=>handleNewFolder(e, true)}>Folder +</button>
                    <button onClick={(e)=>handleNewFolder(e, false)}>File +</button>
                </div>
            </div>

            <div style={{display: expand ? "block" : "none", paddingLeft:20}}>
                {showInput.visible && (
                    <div className="inputContainer">
                        <span> {showInput.isFolder ? "+" : ""} </span>
                        <input type="text" 
                            onBlur={() => setShowInput({...showInput, visible:false})}
                            onKeyDown={onAddFolder}
                            className="inputContainer__input" autoFocus/>
                    </div>
                   ) 
                }
              
            {explorer.items.map((exp) => {
                return <Folder explorer={exp} key={exp.id}/> 
            })}
            </div>
        </div>
    )
   }else{
    return(<span className='File'> {explorer.name} <br/> </span>)
   }
}
