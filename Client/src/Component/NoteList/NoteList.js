import React, { Component } from "react";
import "../NoteList/NoteList.scss";
import axios from "axios";

class NoteList extends Component {
  state = {
    note: [],
  };

  getVideoDetails = (videoID) => {
    axios.get(`http://localhost:8080/notes`).then((videoDetails) => {
      this.setState({
        note: videoDetails.data,
      });
      console.log("notes", this.state.note);
    });
  };

  componentDidMount() {
    this.getVideoDetails();
  }

  render() {
    if (this.state.note.length === 0) {
      return <p>Please wait, this page is loading...</p>;
    }

    console.log("state", this.state.note[0].text);

    return (
      <main>
        {this.state.note.map((note) => {
          return (
            <div key={note.id} className="note__list">
              <p>{note.text}</p>
            </div>
          );
        })}
      </main>
    );
  }
}

export default NoteList;
