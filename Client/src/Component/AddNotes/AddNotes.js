import React, { Component } from "react";
import "../MainVideo/MainVideo.scss";
import { Link } from "react-router-dom";
import axios from "axios";

class AddNotes extends Component {
  state = {
    note: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isTextValid = () => {
    if (!this.state.name) {
      return true;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isTextValid()) {
      axios.post(`http://localhost:8080/notes`, this.state).then(() => {
        this.setState({
          note: "",
        });
      });
      alert("Notes Saved");
    } else {
      alert("Please write a note to save");
    }
  };

  render() {
    return (
      <div>
        <textarea
          className="main__notebox"
          name="text"
          placeholder="Make Notes here..."
          onChange={this.handleChange}
        />

        <div className="main__button">
          <button className="main__button__save" onClick={this.handleSubmit}>
            Save
          </button>
          <Link className="main__button__link" to="/notes">
            <button className="main__button__save">Notes</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AddNotes;
