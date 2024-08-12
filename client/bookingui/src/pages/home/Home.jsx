import React from 'react'
import "./home.css"

import Navbar from '../../components/navbar/Navbar.jsx'
import Heading from '../../components/heading/Heading.jsx'
import Featured from '../../components/featured/Featured.jsx'




function Home() {
  return (
    <div>
     <Navbar/>
     <Heading/>
     <div className="homeCointaner">
      <Featured/>
      <h1 className="homeTitle">Brouse your favourate properties</h1>
     </div>
    </div>
  )
}

export default Home
