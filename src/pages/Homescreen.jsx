import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, fetchTopRatedTv, selectNetflixOriginals, selectTopRatedTv } from '../features/tv/tvSlice';
import Header from '../components/Header';
import Row from '../components/Row';
import { keywords } from '../helper/requests';

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
            
            <Row title="Popular Tv" action={fetchTopRatedTv} selector={selectTopRatedTv} platform={keywords.tv}/>

            <Row title="Top Rated Tv" action={fetchTopRatedTv} selector={selectTopRatedTv} platform={keywords.tv}/>

            <Row title="On Air Tv" action={fetchTopRatedTv} selector={selectTopRatedTv} platform={keywords.tv}/>
        </>
    );
}

export default Homescreen;