import React from 'react';

function Card(props) {
    const {video} = props;
    return (
        <div className='card'>
            <img src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`} alt="" className='card-img-top' />
        </div>
    );
}

export default Card;