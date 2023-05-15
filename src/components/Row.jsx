import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
function Row(props) {
  const { title, action, selector, platform } = props;
  const content = useSelector(selector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action());
  }, [action, dispatch]);
  return (
    <div  className="video-row">
      <h2>{title}</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
      >
        {content.data?.results.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Card video={item} platform={platform} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Row;
