import React from 'react'
import Hero from './hero/Hero'
import BrandList from './hero/BrandList'
import NewArrivals from './hero/NewArrivals'
import SaleNow from './hero/SaleNow'
import Yungsfavourate from './hero/Yungsfavourate'
import MobileApp from './hero/MobileApp'
import JoinCommunity from './hero/JoinCommunity'

const Home = () => {
  
  return (
    
  
<div className='overflow-hidden'>
<Hero/>
 <BrandList/> 
 <NewArrivals/> 
 <SaleNow/> 
 <Yungsfavourate/>
 <MobileApp/> 
 <JoinCommunity/>
</div>
  )
}

export default Home
