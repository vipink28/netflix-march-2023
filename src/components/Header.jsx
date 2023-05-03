import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNetflixOriginals } from '../features/tv/tvSlice';

function Header(props) {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchNetflixOriginals())
    }, [])

    return (
        <div>
            
        </div>
    );
}

export default Header;