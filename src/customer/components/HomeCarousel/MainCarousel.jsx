import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './mainCarouselData';


const MainCarousel = () => {

    const item = mainCarouselData.map((item) => <img className='cursor-pointer' 
    role='presentation' src={item.image} alt=""/>)
    
    return (<AliceCarousel
        items={item}  
    />
    )
}
export default MainCarousel