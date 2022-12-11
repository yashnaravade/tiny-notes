import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import AddNote from "./views/AddNote/AddNote";
import Home from "./views/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-note" element={<AddNote />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
