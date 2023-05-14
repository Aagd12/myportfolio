import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'

import happy from "../../img/happy.png"
import Bird from "../../img/bird.png"
import Insta from "../../img/insta.png"
import pendmic from "../../img/pendmic.jpg"
import Bus from "../../img/Bus.png"
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
                          <img src={happy} alt="" />
                    </a>
                  
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://steady-otter-4d70b0.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src={Bird} alt="" />
                    </a>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/Aagd12/Pendmic-management-System" target="_blank" rel="noopener noreferrer">
                        <img src={pendmic} alt="" />
                    </a>

                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/Aagd12/DBMS/" target="_blank" rel="noopener noreferrer">
                        <img src={Bus} alt="" />
                    </a>

                </SwiperSlide>
     
            </Swiper>
        </div>
    )
}

export default Portfolio