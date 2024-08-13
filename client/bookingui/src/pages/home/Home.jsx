import React from 'react'
import "./home.css"

import Navbar from '../../components/navbar/Navbar.jsx'
import Heading from '../../components/heading/Heading.jsx'
import Featured from '../../components/featured/Featured.jsx'
import PropertyList from '../../components/propertyList/PropertyList.jsx'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties.jsx'
import MailList from '../../components/mailList/MailList.jsx'
import Footer from '../../components/footer/Footer.jsx'




function Home() {
  return (
    <div>
     <Navbar/>
     <Heading/>
     <div className="homeCointaner">
      <Featured/>
      <h1 className="homeTitle">Brouse your favourate properties</h1>
      <PropertyList/>
      <h1 className="homeTitle">Home guests love</h1>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>
     </div>
    </div>
  )
}

export default Home
