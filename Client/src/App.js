import React, { Component } from "react";
import MainVideo from "./Component/MainVideo/MainVideo";
import VideoCards from "./Component/VideoCards/VideoCards";
import axios from "axios";
import AddNotes from "./Component/AddNotes/AddNotes";

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

      //Video displayed on the main page

      const showVideoId = currentvideoId ? currentvideoId : firstVideo;

      this.getVideoDetails(showVideoId);
    });
  };

  componentDidMount() {
    this.getAllVideos();
  }

  componentDidUpdate(previousProps) {
    const currentVideo = this.props.match.params.videoId;
    const previousVideo = previousProps.match.params.videoId;

    //condiotional statement to prevent infinite loop
    if (currentVideo !== previousVideo) {
      //condition to return to the main page if no video is selected
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
          <MainVideo clip={this.state.selectedVideo} />
          <AddNotes />
          <VideoCards videos={this.state.videos} />
        </div>
      </main>
    );
  }
}

export default App;
