import React from 'react';
import Slider from "react-slick";
import service_image1 from './../assets/imgs/s1.jpg';
import service_image2 from './../assets/imgs/s2.jpg';
import service_image3 from './../assets/imgs/s3.jpg';

export default function ServiceSection(){

    const slider = [
        {
            id:1,
            thumbnail: service_image1,
            title:'Painting',
            content:'If the paint on your home is fading and cracking or you simply want a different color, simply contact us to keep your home in top shape.',
        },
        {
            id:2,
            thumbnail: service_image2,
            title:'Cleaning',
            content:'Do you just have a certain area you want cleaned, just preparing for an event at your home? Required for homes over 2500 square feet – we can do that too!',
        },
        {
            id:1,
            thumbnail: service_image3,
            title:'Drywall',
            content:'Our Drywall Repair contractors can tackle all projects, from big to small and provide advice on drywall repair near me. We will help make the process easier by finding you the right professionals for your project.',
        },
        {
            id:1,
            thumbnail: service_image1,
            title:'Painting',
            content:'If the paint on your home is fading and cracking or you simply want a different color, simply contact us to keep your home in top shape.',
        },
        {
            id:2,
            thumbnail: service_image2,
            title:'Cleaning',
            content:'Do you just have a certain area you want cleaned, just preparing for an event at your home? Required for homes over 2500 square feet – we can do that too!',
        },
        {
            id:1,
            thumbnail: service_image3,
            title:'Drywall',
            content:'Our Drywall Repair contractors can tackle all projects, from big to small and provide advice on drywall repair near me. We will help make the process easier by finding you the right professionals for your project.',
        }
    ]

    var settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      return (
        <section className='services'>  
            <div className="container">
                <Slider {...settings}>

                    {
                        slider.map((item, index)=>{
                            return(
                                <div className='services-block'>
                                    <img src={item.thumbnail} alt="" />
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            )
                        })
                    }

                </Slider>
            </div>
        </section>
      );
}