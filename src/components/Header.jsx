import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeaderDetails, selectHeaderDetails } from "../features/common/commonSlice";
import { trimYear, truncate } from "../helper";

function Header(props) {
  const { video } = props;

  const details = useSelector(selectHeaderDetails);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchHeaderDetails({platform: 'tv', id: video?.id}))
  }, [video, dispatch])




  
  return (
    <div className="position-relative vh-100">
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
                return <span key={item.id} className="badge text-bg-warning me-2">{item.name}</span>
              })    
          }        
        </div>
      </div>

      <div className="header-vignette"></div>
      <div className="header-bottom-vignette"></div>
    </div>
  );
}

export default Header;
