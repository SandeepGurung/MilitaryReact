import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import banner_image_1 from './../assets/imgs/banner-image-1.jpg';
import banner_image_2 from './../assets/imgs/banner-image-2.jpg';
import banner_image_3 from './../assets/imgs/banner-image-3.jpg';
import banner_image_4 from './../assets/imgs/banner-image-4.jpg';

export default function Banner(){

    const sliders = [
        {
            id: 1,
            title: 'Trust our solid reputation. 1',
            slug: 'Thumbnail_1',
            content: 'Full Service Interior & Exterior Painting 1',
            thumbnail: banner_image_1
        },
        {
            id: 2,
            title: 'Trust our solid reputation. 2',
            slug: 'Thumbnail_2',
            content: 'Full Service Interior & Exterior Painting 2',
            thumbnail: banner_image_2
        },
        {
            id: 3,
            title: 'Trust our solid reputation. 3',
            slug: 'Thumbnail_3',
            content: 'Full Service Interior & Exterior Painting 3',
            thumbnail: banner_image_3
        },
        {
            id: 4,
            title: 'Trust our solid reputation. 4',
            slug: 'Thumbnail_4',
            content: 'Full Service Interior & Exterior Painting 4',
            thumbnail: banner_image_4
        },
    ]

    return(
        <section className='banner'>
            <OwlCarousel className='owl-theme' loop margin={10} items={1} nav>
                {
                    sliders.map((item, index)=>{
                        return(
                            <div key={index} className='item'>
                                <img src={item.thumbnail} alt="{item.title}" />
                                <div className="banner-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </OwlCarousel>
        </section>
    )
    
}