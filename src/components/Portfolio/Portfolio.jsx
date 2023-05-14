import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'

import Ecommerce from "../../img/ecommerce.png"
import Bird from "../../img/bird.png"
import Insta from "../../img/insta.png"
import Music from "../../img/music.png"
import 'swiper/css'
function Portfolio() {
    return (
        <div className="portfolio">
            <span>Recent projects</span>
            <span>Portfolio</span>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>

                    <a href="https://instagram-clone-92f47.web.app/" target="_blank" rel="noopener noreferrer">
                        <img src={Insta} alt="" />
                    </a>

                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://boring-hoover-0b2941.netlify.app/" target="_blank" rel="noopener noreferrer">
                          <img src={Ecommerce} alt="" />
                    </a>
                  
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://steady-otter-4d70b0.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src={Bird} alt="" />
                    </a>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://serene-nightingale-361fe5.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src={Music} alt="" />
                    </a>

                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://serene-nightingale-361fe5.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src={Music} alt="" />
                    </a>

                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://serene-nightingale-361fe5.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src={Music} alt="" />
                    </a>

                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://serene-nightingale-361fe5.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src={Music} alt="" />
                    </a>

                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://serene-nightingale-361fe5.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src={Music} alt="" />
                    </a>

                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://serene-nightingale-361fe5.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src={Music} alt="" />
                    </a>

                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio