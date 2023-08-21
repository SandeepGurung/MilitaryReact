import React from 'react';
import BannerSection from './../components/Banner';
import WelcomeSection from './../components/Welcome';
import ServiceSection from '../components/Services';
import TestimonialsSection from './../components/Testimonials';

export default function Home(){
    return(
        <>
            <BannerSection></BannerSection>
            <WelcomeSection></WelcomeSection>
            <ServiceSection></ServiceSection>
            <TestimonialsSection></TestimonialsSection>
        </>
    )
}