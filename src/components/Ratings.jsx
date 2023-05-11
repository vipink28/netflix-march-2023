import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Ratings(props) {
    const { voteAverage, voteCount } = props;
    console.log(voteAverage)
    const vote = voteAverage / 2;
    const count = Math.floor(vote);
    const starArr = [...Array(5)];

    return (
        <div className='d-flex'>
            <p className='me-3'>
           {
            starArr.map((item, index)=>{
                return(
                    index < count ?
                    <FontAwesomeIcon className='text-warning' icon={starSolid} />
                    :
                    <FontAwesomeIcon icon={starRegular} />
                )
            })
           }
           </p>
           <p>({voteCount})</p>
        </div>
    );
}

export default Ratings;