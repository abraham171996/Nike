import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import AirMax1 from "../../assets/images/airmax1.png"
import AirMax2 from "../../assets/images/airmax2.png"
import AirMax3 from "../../assets/images/airmax3.png"
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

const SwiperSilder = ({num}) => {
  return (
    <>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      breakpoints={{
       768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: num,
          spaceBetween: 30,
        },
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <img src={AirMax1} alt="" />
        <div className="porduct-info">
            <div className="info">
              <h3>Nike Air Max Pulse</h3>
              <span>Women's Shoes</span>
            </div>
            <div className="price">
                <p>₹ 13 995</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={AirMax2} alt="" />
        <div className="porduct-info">
            <div className="info">
              <h3>Nike Air Max Pulse</h3>
              <span>Men's Shoes</span>
            </div>
            <div className="price">
                <p>₹ 13 995</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={AirMax3} alt="" />
        <div className="porduct-info">
            <div className="info">
              <h3>Nike Air Max 97 SE</h3>
              <span>Men's Shoes</span>
            </div>
            <div className="price">
                <p>₹ 16 995</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={AirMax1} alt="" />
        <div className="porduct-info">
            <div className="info">
              <h3>Nike Air Max Pulse</h3>
              <span>Women's Shoes</span>
            </div>
            <div className="price">
                <p>₹ 13 995</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={AirMax2} alt="" />
        <div className="porduct-info">
            <div className="info">
              <h3>Nike Air Max Pulse</h3>
              <span>Men's Shoes</span>
            </div>
            <div className="price">
                <p>₹ 13 995</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={AirMax3} alt="" />
        <div className="porduct-info">
            <div className="info">
              <h3>Nike Air Max 97 SE</h3>
              <span>Men's Shoes</span>
            </div>
            <div className="price">
                <p>₹ 16 995</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={AirMax1} alt="" />
        <div className="porduct-info">
            <div className="info">
              <h3>Nike Air Max Pulse</h3>
              <span>Women's Shoes</span>
            </div>
            <div className="price">
                <p>₹ 13 995</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={AirMax2} alt="" />
        <div className="porduct-info">
            <div className="info">
              <h3>Nike Air Max Pulse</h3>
              <span>Men's Shoes</span>
            </div>
            <div className="price">
                <p>₹ 13 995</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={AirMax3} alt="" />
        <div className="porduct-info">
            <div className="info">
              <h3>Nike Air Max 97 SE</h3>
              <span>Men's Shoes</span>
            </div>
            <div className="price">
                <p>₹ 16 995</p>
            </div>
        </div>
      </SwiperSlide>
   
     
      
    </Swiper>
  </>
  )
}

export default SwiperSilder