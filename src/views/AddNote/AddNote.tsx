import React from "react";
import "./AddNote.css";
import Navbar from "../../components/Navbar/Navbar";

function AddNote() {
  return (
    <div className="parent-container">
      <Navbar />
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-6 offset-md-3 rounded">
            <div className="card">
              <div className="card-header bg-primary">
                <h3 className="text-dark">Add Note</h3>
              </div> 
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNote;
