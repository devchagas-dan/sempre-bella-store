import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import Navigation from '../../components/Navigation/Navigation'

const HomePage = () => {
    return (        
        
        <div>
            <Navigation/>
            <MainCarousel/>
            <div>
                other section
            </div>
        </div>
    )
}
export default HomePage