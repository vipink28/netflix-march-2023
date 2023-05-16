import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderDetails } from '../features/common/commonSlice';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import { fetchNowPlayingMovies, selectNowPlayingMovies } from '../features/movie/movieSlice';

function Browse(props) {
    
    const [videoData, setVideoData] = useState(null);
    const { platform } = useParams();

    const nfOriginals = useSelector(selectNetflixOriginals);
    const nowPlaying = useSelector(selectNowPlayingMovies);

    const dispatch = useDispatch();
    

    useEffect(()=>{
            if(platform === "movie"){
                dispatch(fetchNowPlayingMovies());
            }else{
                dispatch(fetchNetflixOriginals());
            }  
    }, [platform]);

    useEffect(()=>{
        if(platform === "movie" && nowPlaying.data != null){
            setVideoData(nowPlaying.data?.results)
        }else{
            setVideoData(nfOriginals.data?.results)
        }
    }, [platform, nowPlaying, nfOriginals])
    
    const randomNumber = Math.floor(
        Math.random() * videoData?.length
    );

    return (
        
        <>
            <Header video={videoData ? videoData[randomNumber] : null} platform={platform}/>
        </>
    );
}

export default Browse;