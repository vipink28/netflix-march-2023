import React from 'react';
import { fetchVideoDetails, selectVideoDetails } from '../features/common/commonSlice';
import { useSelector } from 'react-redux';
import YoutubePlayer from './YoutubePlayer';
import Ratings from './Ratings';
import { trimYear } from '../helper';

function DetailsModal(props) {
    const video = useSelector(selectVideoDetails);

    return (
        <div className="modal" tabIndex="-1" id='videoModal'>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <YoutubePlayer trailer={video.data?.videos.results}/>
              <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                        <h5>{video.data?.name || video.data?.original_name || video.data?.title || video.data?.original_title}</h5>
                        <div className="d-flex">
                          <p>{ trimYear(video.data?.first_air_date || video.data?.release_date)}</p>
                          <Ratings voteCount={video.data?.vote_count} voteAverage={video.data?.vote_average}/>
                        </div>
                    </div>
                    <div className="col-lg-4">

                    </div>
                  </div>
              </div>
            </div>         
          </div>
        </div>
      </div>
    );
}

export default DetailsModal;