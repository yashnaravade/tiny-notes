import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Note from '../../components/Note/Note'

function Home() {

  const [notes, setNotes] = React.useState([
    {
      title: "Note 1",
      description: "This is note 1"
    },
    {
      title: "Note 2",
      description: "This is note 2"
    },
    {
      title: "Note 3",
      description: "This is note 3"
    },
    {
      title: "Note 4",
      description: "This is note 4"
    }
  ])


  return (
    <div>
      <Navbar />
<div className="app-title-container mt-2">
        <h1 className="app-title border">📝 Notes App</h1>
</div>
<div className="notes-container">
  {
    notes.map((note) => {
      return (
        <Note title={note.title} description={note.description}/>
      )
    })

  }
</div>
</div>
  
  )
}

export default Home