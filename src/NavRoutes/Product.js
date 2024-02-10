import React from 'react'
import "../ProductDisplay.css"
import RecentAdd from '../Components/RecentAdd'
import Expired from '../Components/Expired'
import Search from '../Components/Search'
import Slider from '../Components/Slider'
import Critical from '../Components/Critical'
import Footer from '../Components/footer'

export const Product = () => {
    const handleSearch = (searchTerm) => {
        // Implement your search logic here based on the searchTerm
        console.log('Searching for:', searchTerm);
      };
  return (
    <>
    <Search onSearch={handleSearch}/>
 
    <Slider/>
    {/* <RecentAdd/> */}
    <Expired/>
    <Critical/>
    <Footer/>

    </>
  )
}

export default Product;