import React from 'react';
import Slider from "react-slick";

export default function TestimonialsPage(){

    const testimonials_sliders = [
        {
            id: 1,
            content: 'I highly recommend anyone to call and set up that first appointment, whether it be for a small project or a full scale one, you won’t be disappointed! I now have the kitchen of my dreams!',
        },
        {
            id: 2,
            content: 'Good',
        },
        {
            id: 3,
            content: 'I highly recommend anyone to call and set up that first appointment, whether it be for a small project or a full scale one, you won’t be disappointed! I now have the kitchen of my dreams!',
        },
        {
            id: 4,
            content: 'Amazing',
        },
    ]

    var settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <section className='testimonials'>  
            <div className="container">
                <div className="title-section">
                    <h5>Our Reviews</h5>
                    <h3>Testimonials</h3>
                </div>
                <Slider {...settings}>

                    {
                        testimonials_sliders.map((item, index)=>{
                            return(
                                <div className="col-md-8">
                                    <div className='testimonials-block'>
                                    <p>{item.content}</p>
                                </div>
                                </div>
                            )
                        })
                    }

                </Slider>
            </div>
        </section>
      );
}