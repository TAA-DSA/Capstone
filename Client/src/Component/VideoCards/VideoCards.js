import React from "react";
import { Link } from "react-router-dom";
import "../VideoCards/VideoCards.scss";

function VideoCards({ videos }) {
  console.log(videos);
  return (
    <div className="videocards">
      <h1 className="videocards__header"> My Videos</h1>
      {videos.map((list) => {
        return (
          <div key={list.id} className="videocards__gallery">
            <Link className="Link" to={`/videos/${list.id}`}>
              <img
                className="videocards__gallery__clips"
                src={list.image}
                alt="react image"
              />

              <div className="videocards__gallery__info">
                <h4>{list.title}</h4>
                <div className="videocards__gallery__info__container">
                  <div>
                    <p>Duration: {list.duration} </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default VideoCards;
