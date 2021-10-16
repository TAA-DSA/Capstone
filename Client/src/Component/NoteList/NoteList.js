import React, { Component } from "react";
import "../NoteList/NoteList.scss";
import axios from "axios";

class NoteList extends Component {
  state = {
    note: [],
  };

  getNotes = () => {
    axios.get(`http://localhost:8080/notes`).then((noteData) => {
      this.setState({
        note: noteData.data,
      });
    });
  };

  componentDidMount() {
    this.getNotes();
  }

  render() {
    if (this.state.note.length === 0) {
      return <p>Please wait, this page is loading...</p>;
    }

    return (
      <main>
        {this.state.note.map((note) => {
          return (
            <div key={note.id} className="note__list">
              <p className="note__list__text">{note.text}</p>
            </div>
          );
        })}
      </main>
    );
  }
}

export default NoteList;
