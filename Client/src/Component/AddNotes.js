import React from "react";
import "../Component/MainVideo/MainVideo.scss";

function addNotes() {
  return (
    <div>
      <textarea
        className="main__notebox"
        input="text"
        placeholder="Make Notes here..."
        // onChange={handleChange}
      />
      {/* <button className="main__button__save">Save Note</button> */}
      <div className="main__button">
        <button className="main__button__save">Save Note</button>
      </div>
    </div>
  );
}

export default addNotes;
