import React from "react";
import "../../Component/MainVideo/MainVideo.scss";
import ReactPlayer from "react-player";

function MainVideo({ clip }) {
  return (
    <main>
      <div className="main">
        <ReactPlayer url={clip.video} controls />
      </div>
      <div className="main__videoDetails">
        <p>{clip.title}</p>
        <p>{clip.duration}</p>
        <textarea
          className="main__notebox"
          input="text"
          placeholder="Notes..."
        />
        <div className="main__button">
          <button className="main__button__save">Save Note</button>
        </div>
      </div>
    </main>
  );
}

export default MainVideo;
