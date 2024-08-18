import React from 'react'
import "./hotel.css"
import Navbar from '../../components/navbar/Navbar'
import Heading from '../../components/heading/Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Hotel() {

   const photos=[
    {
        src:"https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" 
    } ,
    {
        src:"https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" 
    } ,
    {
        src:"https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" 
    } ,
    {
        src:"https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" 
    } ,
    {
        src:"https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" 
    } ,
    {
        src:"https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" 
    } 
]
    
  return (
    <div>
      <Navbar/>
      <Heading type="list"/>
      <div className="hotelCointaner">
        <div className="hotelWrapper">
            <h1 className="hotelTitle">Grand Hotel</h1>
            <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot}/>
                <span>Munni ka kotha</span>
            </div>
            <span className="hotelDistance">
                Excellent Location - 500m from the center
            </span>
            <span className="hotelPriceHighlight">
                Book a stay over Rs 15000 at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
                {photos.map(photo=>(
                    <div className="hotelImgWrapper">
                        <img src={photo.src} alt="" className="hotelImg" />
                    </div>
                ))}
            </div>
            <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of mumbai</h1>
                <p className='hotelDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquam 
                    dolore voluptates reprehenderit unde, velit natus! Nesciunt ullam possimus
                     rerum blanditiis dicta dolorem quos porro delectus tempora? Itaque, aspernatur perspiciatis.</p>
                     </div>
                <div className="hotelDetailsPrice">
                    <h1>Perfect for a long night stay!</h1>
                    <span>Located in the real heart of mumbai this property has
                        a excellent location score of 9.8  </span>
                        <h2>
                            <b>Rs 945</b>((9 nights))
                        </h2>
                        <button>Reserve or Book Now !</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel
