import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import "./Body.css"
import data from "../../utils/slider.json"
import data1 from "../../utils/slider1.json"
import data2 from "../../utils/slider2.json"
import { sliderSettings } from '../../utils/common'
const Body = () => {
    return (
        <section className='r-wrapper'>
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Beneficial Seasonal crops</span>
                    <span className='primaryText'>Summer Crops</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="home" />
                                    <span className='secondaryText r-price'>
                                        <span style={{ color: "orange" }}>$</span>
                                        <span>{card.price}</span>
                                    </span>
                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    {/* <span className='orangeText'>Beneficial Seasonal crops</span> */}
                    <span className='primaryText'>Winter crops</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {
                        data1.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="home" />
                                    <span className='secondaryText r-price'>
                                        <span style={{ color: "orange" }}>$</span>
                                        <span>{card.price}</span>
                                    </span>
                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    {/* <span className='orangeText'>Beneficial Seasonal crops</span> */}
                    <span className='primaryText'>Raining crops</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {
                        data2.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="home" />
                                    <span className='secondaryText r-price'>
                                        <span style={{ color: "orange" }}>$</span>
                                        <span>{card.price}</span>
                                    </span>
                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            
        </section>
    )
}

export default Body
const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className=" flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>
                &lt;
            </button>
            <button onClick={() => swiper.slideNext()}>
                &gt;
            </button>
        </div>
    )
}