import React, { useState } from 'react'
import "./hotel.css"
import Navbar from '../../components/navbar/Navbar'
import Heading from '../../components/heading/Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

function Hotel() {

    const [slideNumber,setSlideNumber]=useState(0);
    const [open,setOpen]=useState(false);

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
const handleOpen =(i)=>{
    setSlideNumber(i);
    setOpen(true)
}
const handleMove = (direction)=>{
    let newSlideNumber;

    if(direction === "l"){
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }else{
        newSlideNumber = slideNumber === 5 ? 0 :slideNumber+1
    }
    setSlideNumber(newSlideNumber)
    console.log(newSlideNumber)
}
    
  return (
    <div>
      <Navbar/>
      <Heading type="list"/>
      <div className="hotelCointaner">
        {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className='close'onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
            <div className="slideWrapper">
                <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
            </div>}
        <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
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
                {photos.map((photo,i)=>(
                    <div className="hotelImgWrapper">
                        <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                    </div>
                ))}
            </div>
            <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of mumbai</h1>
                <p className='hotelDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquam 
                    dolore voluptates reprehenderit unde, velit natus! Nesciunt ullam possimus
                     rerum blanditiis dicta dolorem quos porro delectus tempora? Itaque, aspernatur perspiciatis.
                     Lorem ipsum dolor sit amet consectetur adipisicing 
                     elit. Alias aliquam nemo beatae recusandae id quaerat 
                     quod, quis dignissimos iusto. Repellendus saepe consectetur adipisicing 
                     officiis labore aperiam ut quibusdamlo molestiae a sunt consequuntur
                      corporis esse illum voluptates!us, ipsum id magni vero molestias nisi
                      Lorem ipsum dolor sit amet sint ipsa adipisci?
                      elit. Corrupti ilplaceat delectsapiente atque odio rem totam
  
                     </p>
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
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel
