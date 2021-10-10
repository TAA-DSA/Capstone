import React, { Component } from "react";
import Header from "./Component/Header/Header";
import MainVideo from "./Component/MainVideo/MainVideo";
import VideoCards from "./Component/VideoCards/VideoCards";
import videoList from "./data/Videos.json";

class App extends Component {
  state = {
    videos: videoList,
    selectedVideo: videoList[0],
  };

  render() {
    console.log(this.state.videos[0].image);
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
