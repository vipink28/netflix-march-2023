import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNetflixOriginals,
  selectNetflixOriginals,
} from "../features/tv/tvSlice";
import { fetchHeaderDetails } from "../features/common/commonSlice";

function Header(props) {
  const { video } = props;
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchHeaderDetails({platform: 'tv', id: video?.id}))
  }, [video, dispatch])
  
  return (
    <div className="position-relative">
      {video ? (
        <img
          className="header-img"
          src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`}
          alt=""
        />
      ) : (
        ""
      )}

      <div className="caption text-white">
        <h2 className="display-4 fw-bold">{video?.name || video?.original_name || video?.title || video?.original_title}</h2>
        <p className="fs-4">{video?.overview}</p>
      </div>
    </div>
  );
}

export default Header;
