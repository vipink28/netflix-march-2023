import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import Header from '../components/Header';

function Homescreen(props) {

    const nfOriginals = useSelector(selectNetflixOriginals);
    if(nfOriginals.data){
        console.log(nfOriginals.data.results);
    }
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchNetflixOriginals())
    }, []);
    
    const randomNumber = Math.floor(Math.random() * nfOriginals.data?.results.length)

    return (
        <>
            <Header video={nfOriginals.data ? nfOriginals.data.results[randomNumber]: null}/>
        </>
    );
}

export default Homescreen;