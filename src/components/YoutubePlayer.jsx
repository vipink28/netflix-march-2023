import React from "react";

function YoutubePlayer(props) {
    const { trailerKey } = props;
  return (
    <div className="ratio ratio-16x9">
      <iframe
        src={`https://www.youtube.com/embed/${trailerKey}?rel=0`}
        title="YouTube video"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default YoutubePlayer;
