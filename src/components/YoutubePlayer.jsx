import React, { useEffect, useState } from "react";

function YoutubePlayer(props) {
    const { trailer } = props;
    const [trailerKey, setTrailerKey]=useState(null);

    useEffect(()=>{
      if(trailer){
        const obj = trailer.find((item)=>{
          return item.type === 'Trailer'
        })
        setTrailerKey(obj.key);
      }      
    }, [trailer])

  return (
    <div className="ratio ratio-16x9">
      <iframe
        src={`https://www.youtube.com/embed/${trailerKey}?rel=0&autoplay=1&mute=1`}
        title="YouTube video"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default YoutubePlayer;
