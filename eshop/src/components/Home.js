import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
  return (
    <div className='home'>
        <div className="home_container">
            <img src="https://png.pngtree.com/background/20210711/original/pngtree-hand-painted-daily-household-laundry-liquid-e-commerce-banner-picture-image_1096149.jpg" alt="" className="home_image" />
            <div className="home_row">
               <Product/>
               <Product/>
            </div>
            <div className="home_row">
            <Product/>
            <Product/>
            <Product/>
            </div>
            <div className="home_row">
            <Product/>
            </div>

        </div>

      
    </div>
  )
}

export default Home
