import React, { useEffect, useState } from "react";
import { requests } from "../helper/requests";
import axios from "../helper/axios";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
function BrowseByGenre(props) {
  const { platform, id } = useParams();
  const [videoList, setVideoList] = useState(null);
  const [genreList, setGenreList] = useState(null);
  const [genreName, setGenreName] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [genreId, setGenreId]=useState(null);


  const fetchGenreList = async (val) => {
    const response = await axios(requests.getGenreList(val));
    setGenreList(response.data.genres);
    const genre = response.data.genres.find((item)=>(item.id === Number(id)));
    setGenreName(genre.name);
  };

  //
  const fetchVideosByGenre = async (platform, id) => {
    const response = await axios(requests.getByGenre(platform, id));
    setVideoList(response.data.results);
  };


  useEffect(() => {    
    fetchVideosByGenre(platform, id);
  }, []);

  useEffect(()=>{    
    fetchGenreList(platform);
    setSelectedPlatform(platform);
  }, [])

  const onPlatformSelect=async(e)=>{
    const { value } = e.target;
    fetchGenreList(value);
    setSelectedPlatform(value);
  }

  const onGenreSelect=(e)=>{
    const { value } = e.target;
    fetchVideosByGenre(selectedPlatform, value);
    const genre = genreList.find((item)=>(item.id === Number(value)));
    setGenreName(genre.name);
  }

  return (
    <div className="container-fluid pt-5 mt-5">
      <div className="d-flex">
        <p className="ms-auto">Select Genre</p>
        <select name="platform" onChange={onPlatformSelect}>
          <option value="tv" selected={platform === "tv" ? "selected": ""}>Tv</option>
          <option value="movie" selected={platform === "movie" ? "selected": ""}>Movie</option>
        </select>

        <select name="genres" onChange={onGenreSelect}>
        {
            genreList?.map((item)=>{
                return <option value={item.id}>{item.name}</option>
            })
        }          
        </select>
      </div>
      <h2>{genreName}</h2>
      <div className="row gy-4">
        {videoList?.map((item) => {
          return (
            <div key={item.id} className="col-lg-3">
              <Card video={item} platform={platform} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BrowseByGenre;
