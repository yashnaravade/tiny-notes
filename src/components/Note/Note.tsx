import React from 'react'
import swal from 'sweetalert'
import "./Note.css"

function Note({title, description, noteIndex}: {title: string, description: string, noteIndex:number}) {


  function deleteNote() {

    const notes = localStorage.getItem("notes");
    if (notes) {
      const tempNotes = JSON.parse(notes);
      tempNotes.splice(noteIndex, 1);
      localStorage.setItem("notes", JSON.stringify(tempNotes));
    }
    swal("Note Deleted!", "Your note has been deleted!", "success");
    console.log("Note Deleted!")

    window.location.reload();
  }


  return (
   <>
   <div className="card-note bg-light">
        <h5 className="note-title">{title}</h5>
        <p className="note-description">{description}</p>
        <span className='delete-button' onClick={deleteNote}><svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m3 6h18m-16 0v14c0 1.1046.89543 2 2 2h10c1.1046 0 2-.8954 2-2v-14m-11 0v-2c0-1.10457.89543-2 2-2h4c1.1046 0 2 .89543 2 2v2"/><path d="m14 11v6"/><path d="m10 11v6"/></g></svg></span>
   </div>  
   </>

  )
}

export default Note