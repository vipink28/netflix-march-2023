import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeaderDetails, selectHeaderDetails } from "../features/common/commonSlice";
import { trimYear, truncate } from "../helper";
import Ratings from "./Ratings";
import YoutubePlayer from "./YoutubePlayer";
import GenreLink from "./GenreLink";

function Header(props) {
  const { video, platform } = props;
  const [showTrailer, setShowTrailer]= useState(false);
  const [trailerList, setTrailerList] = useState(null);

  const details = useSelector(selectHeaderDetails);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchHeaderDetails({platform: platform, id: video?.id}))
  }, [video, platform, dispatch])

  useEffect(()=>{
    if(details.data){
      let list = details.data?.videos.results;
      setTrailerList(list);
    }
  }, [details.data])
  // const trailerKey = details.data?.videos.results[0].key;

  const playTrailer = ()=>{
    setShowTrailer(true);
  }


  return (
    <div className="position-relative vh-100">
      {
        showTrailer ?
      <YoutubePlayer trailer={trailerList}/>
        :
      <>
      {details.data ? (
        <img
          className="header-img"
          src={`https://image.tmdb.org/t/p/original${details.data?.backdrop_path}`}
          alt=""
        />
      ) : (
        ""
      )}
      <div className="caption text-white">
        <h2 className="display-1 fw-bold title">{details.data?.name || details.data?.original_name || details.data?.title || details.data?.original_title}</h2>

        <h4 className="text-warning display-6 tagline">{details.data?.tagline}</h4>
        
        <p className="fs-4">{ trimYear(details.data?.first_air_date || details.data?.release_date)}</p>

        <p className="fs-4">{truncate(details.data?.overview, 150)}</p>
        <div className="d-flex">
          {
              details.data?.genres.map((item)=>{
                return <GenreLink key={item.id} genre={item} platform={platform} genreId={item.id} />
              })    
          }        
        </div>
        <div className="mt-3">
          <Ratings voteAverage={details.data?.vote_average} voteCount={details.data?.vote_count} />
        </div>

        <button className="btn btn-danger" onClick={playTrailer}>Play Trailer</button>

      </div>
      <div className="header-vignette"></div>
      </>
      }
      <div className="header-bottom-vignette"></div>
    </div>
  );
}

export default Header;
