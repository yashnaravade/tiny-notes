import React from 'react'
import "./Note.css"

function Note({title, description}: {title: string, description: string}) {
  return (
   <>
   <div className="card-note bg-light">
        <h5 className="note-title">{title}</h5>
        <p className="note-description">{description}</p>
   </div>  
   </>

  )
}

export default Note