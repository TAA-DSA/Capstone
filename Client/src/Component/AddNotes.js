import React from "react";
import "../Component/MainVideo/MainVideo.scss";
import { useState } from "react";

function AddNotes() {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setNoteText(event.target.value);
  };

  return (
    <div>
      <textarea
        className="main__notebox"
        input="text"
        placeholder="Make Notes here..."
        value={noteText}
        onChange={handleChange}
      />
      {/* <button className="main__button__save">Save Note</button> */}
      <div className="main__button">
        <button className="main__button__save">Save Note</button>
      </div>
    </div>
  );
}

export default AddNotes;
