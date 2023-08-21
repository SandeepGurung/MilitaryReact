import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/css/style.css';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import GalleryPage from './pages/Gallery';
import TestimonialsPage from './pages/Testimonials';
import PageNotFound from './pages/404';


export default function App(){
    return(
        <HashRouter>
            <Header></Header>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/services" element={<ServicesPage/>}/>
                    <Route path="/gallery" element={<GalleryPage/>}/>
                    <Route path="/testimonials" element={<TestimonialsPage/>}/>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            
            <Footer></Footer>
        </HashRouter>
    )
}