import React from 'react';
import Ratings from './Ratings';
import { useDispatch } from 'react-redux';
import { fetchVideoDetails } from '../features/common/commonSlice';

function Card(props) {
    const {video , platform} = props;
    const dispatch = useDispatch();
    const view=()=>{
        dispatch(fetchVideoDetails({platform: platform, id: video.id}))
    }

    return (
        <div className='card' data-bs-toggle="modal" data-bs-target="#videoModal" onClick={view}>
            <img src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`} alt="" className='card-img-top' />
            <div className="card-body">
                <h5>{video.name || video?.original_name || video?.title || video?.original_title}</h5>
                <Ratings voteAverage={video?.vote_average} voteCount={video?.vote_count}/>
            </div>
        </div>
    );
}

export default Card;