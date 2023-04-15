import { useState } from 'react';
import './index.sass';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Gallery = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      };
    return <> 
        <section className="gallery">
            <div className="container">
                <div className="gallery__inner">
                    <div>
                        <h4>Event Gallery</h4>
                    </div>
                    <div className='gallery__carousel'>
                        <Slider {...settings}>
                            <div className='gallery--item'>1</div>
                            <div className='gallery--item'>2</div>
                            <div className='gallery--item'>3</div>
                            <div className='gallery--item'>4</div>
                            <div className='gallery--item'>5</div>
                            <div className='gallery--item'>6</div>
                            <div className='gallery--item'>7</div>
                        </Slider>
                    </div>    
                </div>
            </div>
        </section>
    </>
}
export default Gallery;