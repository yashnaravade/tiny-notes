import React, { useEffect } from "react";
import swal from "sweetalert";
import "./Home.css";
// import Navbar from '../../components/Navbar/Navbar'
import Note from "../../components/Note/Note";

function Home() {
  const [notes, setNotes] = React.useState([
    {
      title: "Note 1",
      description: "This is note 1",
    },
  ]);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  useEffect(() => {
    const notes = localStorage.getItem("notes");
    if (notes) {
      setNotes(JSON.parse(notes));
    }
  }, []);

  useEffect(() => {
    if(notes.length > 1) {
    localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  function addNote() {
    //  const tempNotes = [...notes]
    //   tempNotes.push({
    //       title: title,
    //       description: description
    //   })
    // setNotes(tempNotes)
    swal("Note Added!", "Your note has been added!", "success");

    if (title === "" || description === "") {
      swal("Error!", "Please fill all the fields!", "error");
      return;
    }



    setNotes([

      ...notes,
      {
        title: title,
        description: description,
      },
    ]);

    setTitle("");
    setDescription("");
  }

  return (
    <div>
      {/* <Navbar /> */}
      <div className="app-title-container mt-4">
        <h1 className="app-title">📝 Notes App</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="notes-container">
            {notes.map((note, index) => {
              return <Note title={note.title} description={note.description} noteIndex={index} />;
            })}
          </div>
        </div>
        <div className="col-md-6 rounded mt-4">
          <div className="card">
            <div className="card-header text-center">
              <h3 className="text-dark">Add Note</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary mt-4"
                  onClick={addNote}
                >
                  Add Note
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// late lecture
// late homework
// admissin success send <Email>
// </Email>

// welcome for new course
