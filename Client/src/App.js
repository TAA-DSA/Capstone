import React, { Component, useState } from "react";
import Header from "./Component/Header/Header";
import MainVideo from "./Component/MainVideo/MainVideo";
import VideoCards from "./Component/VideoCards/VideoCards";
import axios from "axios";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  getVideoDetails = (videoID) => {
    axios
      .get(`http://localhost:8080/videos/${videoID}`)
      .then((videoDetails) => {
        this.setState({
          selectedVideo: videoDetails.data,
        });
      });
  };

  getAllVideos = () => {
    axios.get("http://localhost:8080/videos").then((videoResult) => {
      this.setState({
        videos: videoResult.data,
      });

      //default video id
      const firstVideo = this.state.videos[0].id;

      //current video ID
      const currentvideoId = this.props.match.params.videoId;

      // Condition to show the video thats been selected on main page
      // and stay on the page

      const showVideoId = currentvideoId ? currentvideoId : firstVideo;

      this.getVideoDetails(showVideoId);
    });
  };

  componentDidMount() {
    this.getAllVideos();
    console.log("componentmounted");
  }

  componentDidUpdate(previousProps) {
    const currentVideo = this.props.match.params.videoId;
    const previousVideo = previousProps.match.params.videoId;
    console.log(currentVideo);

    // if (!currentVideo) {
    //   this.getAllVideos();
    // }
    //Prevent infinite loop
    if (currentVideo !== previousVideo) {
      if (!currentVideo) {
        this.getAllVideos();
      } else {
        this.getVideoDetails(currentVideo);
      }
    }
  }

  render() {
    if (!this.state.selectedVideo) {
      return <p>Please wait, this page is loading...</p>;
    }
    return (
      <main>
        <div className="App">
          <Header />

          <MainVideo clip={this.state.selectedVideo} />
          <VideoCards videos={this.state.videos} />
        </div>
      </main>
    );
  }
}

export default App;
