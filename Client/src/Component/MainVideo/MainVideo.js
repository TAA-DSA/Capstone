import React from "react";
import "../../Component/MainVideo/MainVideo.scss";
import ReactPlayer from "react-player";
//import { useState } from "react";

function MainVideo({ clip }) {
  // const [noteText, setNoteText] = useState("");

  // const handleChange = (event) => {
  //   console.log(event.target.value);
  //   setNoteText(event.target.value);
  // };

  return (
    <main>
      <div className="main">
        <ReactPlayer url={clip.video} controls />
      </div>
      <div className="main__videoDetails">
        <p>{clip.title}</p>
        <p>{clip.duration}</p>
      </div>
    </main>
  );
}

export default MainVideo;
