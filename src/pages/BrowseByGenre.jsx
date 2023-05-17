import React, { useEffect, useState } from "react";
import { requests } from "../helper/requests";
import axios from "../helper/axios";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
function BrowseByGenre(props) {
  const { platform, id } = useParams();
  const [videoList, setVideoList] = useState(null);
  const [genreList, setGenreList] = useState(null);

  useEffect(() => {
    const fetchVideosByGenre = async () => {
      const response = await axios(requests.getByGenre(platform, id));
      setVideoList(response.data.results);
    };
    fetchVideosByGenre();
  }, []);

  const onPlatformSelect=async(e)=>{
    const { value } = e.target;
    const response = await axios(requests.getGenreList(value));
    setGenreList(response.data.genres);
  }

  const onGenreSelect=()=>{

  }

  return (
    <div className="container-fluid pt-5 mt-5">
      <div className="d-flex">
        <p className="ms-auto">Select Genre</p>
        <select name="platform" onChange={onPlatformSelect}>
          <option value="tv">Tv</option>
          <option value="movie">Movie</option>
        </select>

        <select name="genres" onChange={onGenreSelect}>
        {
            genreList?.map((item)=>{
                return <option value={item.id}>{item.name}</option>
            })
        }          
        </select>
      </div>
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
