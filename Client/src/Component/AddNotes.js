import React from "react";
import "../Component/MainVideo/MainVideo.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function AddNotes() {
  //const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    //setNoteText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <textarea
        className="main__notebox"
        input="text"
        placeholder="Make Notes here..."
        onChange={handleChange}
      />

      <div className="main__button">
        <button className="main__button__save">Save</button>
        <Link className="main__button__link" to="/notes">
          <button className="main__button__save">Notes</button>
        </Link>
      </div>
    </div>
  );
}

export default AddNotes;
