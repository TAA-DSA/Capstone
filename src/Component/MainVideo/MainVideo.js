import React from "react";
import Video from "../../Asset/React Router Beginners-4.mp4";
import Test from "../../Asset/intro-to-react-router.jpeg";
import "../../Component/MainVideo/MainVideo.scss";
//import YouTube from "react-youtube";
import ReactPlayer from "react-player";

function MainVideo() {
  return (
    <main>
      <div className="main">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=qz0aGYrrlhU"
          controls
        />

        {/* <video
          className="main__videoplayer"
          src={Video}
          poster={Test}
          controls
        /> */}
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
