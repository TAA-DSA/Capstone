import React from "react";
import "../../Component/MainVideo/MainVideo.scss";
import ReactPlayer from "react-player";

function MainVideo({ clip }) {
  return (
    <main>
      <div className="main">
        <ReactPlayer url={clip[0].video} controls />
      </div>
      <div>
        {/* <h1>Title</h1>
        <p>Description</p>
        <p>Duration</p> */}
      </div>
      {/* <div>
        <textarea
          className="main__notebox"
          input="text"
          placeholder="Notes..."
        />
      </div> */}
    </main>
  );
}

export default MainVideo;
