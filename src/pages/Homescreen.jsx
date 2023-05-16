import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNetflixOriginals,
  fetchPopularTv,
  fetchTopRatedTv,
  selectNetflixOriginals,
  selectPopularTv,
  selectTopRatedTv,
} from "../features/tv/tvSlice";
import Header from "../components/Header";
import Row from "../components/Row";
import { keywords } from "../helper/requests";
import {
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
  selectNowPlayingMovies,
  selectUpcomingMovies,
} from "../features/movie/movieSlice";

function Homescreen(props) {
  const nfOriginals = useSelector(selectNetflixOriginals);
  if (nfOriginals.data) {
    console.log(nfOriginals.data.results);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNetflixOriginals());
  }, []);

  const randomNumber = Math.floor(
    Math.random() * nfOriginals.data?.results.length
  );

  return (
    <>
      <Header
        video={nfOriginals.data ? nfOriginals.data.results[randomNumber] : null}
        platform="tv"
      />

      <div className="container-fluid">
        <Row
          title="Upcoming Movies"
          action={fetchUpcomingMovies}
          selector={selectUpcomingMovies}
          platform={keywords.movie}
        />

        <Row
          title="Now Playing Movies"
          action={fetchNowPlayingMovies}
          selector={selectNowPlayingMovies}
          platform={keywords.movie}
        />

        <Row
          title="Popular Tv"
          action={fetchPopularTv}
          selector={selectPopularTv}
          platform={keywords.tv}
        />

        <Row
          title="Top Rated Tv"
          action={fetchTopRatedTv}
          selector={selectTopRatedTv}
          platform={keywords.tv}
        />
      </div>
    </>
  );
}

export default Homescreen;
