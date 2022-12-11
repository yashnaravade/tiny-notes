import React from 'react'
import "./Note.css"

function Note({title, description}) {
  return (
   <>
   <div className="card-note">
        <h5 className="note-title">{title}</h5>
        <p className="note-description">{description}</p>
   </div>
   </>

  )
}

export default Note