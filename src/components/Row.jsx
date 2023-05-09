import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import Card from './Card';
import { fetchTopRatedTv, selectTopRatedTv } from "../features/tv/tvSlice";

function Row(props) {

    const {title, action, selector} = props;
    console.log(selector);
  const content = useSelector(selector);
//   console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action());
  }, [action, dispatch]);

  return (
    <div>
      <h2>{title}</h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
            content.data?.results.map((item)=>{
                return <SwiperSlide key={item.id}>
                    <Card video={item}/>
                </SwiperSlide>      
            })
        }
        
      </Swiper>
    </div>
  );
}

export default Row;
