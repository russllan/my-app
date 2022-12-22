import React from 'react'
import Slider from "react-slick"
import { data } from '../../constants/productPage/data'
import css from './Carousel.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Carousel = () => {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 2,
      initialSlide: 2
    };
  return (
    <div className={css.Carousel}>
        <Slider {...settings}>
            {data.map(item => (
                <div className={css.card} key = {item.id}>
                    <img src={item.imgUrl} alt={item.name} />
                </div>
            ))}
        </Slider>
    </div>
  )
}
