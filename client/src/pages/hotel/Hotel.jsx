import React, { useContext, useState } from 'react'
import "./hotel.css"
import Navbar from '../../components/navbar/Navbar'
import Heading from '../../components/heading/Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import useFetch from '../../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'
import Reserve from '../../components/reserve/Reserve'

function Hotel() {
    const location = useLocation();
    const id =location.pathname.split("/")[2];

    const [slideNumber,setSlideNumber]=useState(0);
    const [open,setOpen]=useState(false);
    const [openModel,setOpenModel]=useState(false);

    const {data, loading, error}=useFetch(`http://localhost:8800/api/hotels/find/${id}`)
    const {users}=useContext(AuthContext);
    const navigate=useNavigate();
    

    const {dateRange,options}=useContext(SearchContext);
    
       


const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

function dayDifference(date1, date2) {
    if (!date1 || !date2) {
        console.error('One or both dates are undefined:', { date1, date2 });
        return null; 
    }

    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
}


   const days=(dayDifference(dateRange.endDate , dateRange.startDate));
   
  
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

const handleClick = ()=>{
    console.log(users);
  if(users){
  setOpenModel(true);
  }else{
    navigate("/login");
  }
}
    
  return (
    <div>
      <Navbar/>
      <Heading type="list"/>
      {loading ? ( "loading") : (<div className="hotelCointaner">
        {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className='close'onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
            <div className="slideWrapper">
                <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
            </div>}
        <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot}/>
                <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
                Excellent Location - {data.distance}m from the center
            </span>
            <span className="hotelPriceHighlight">
                Book a stay over Rs {data.cheapestPrice} at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
                {data.photos?.map((photo,i)=>(
                    <div className="hotelImgWrapper">
                        <img onClick={()=>handleOpen(i)} src={photo} alt="" className="hotelImg" />
                    </div>
                ))}
            </div>
            <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className='hotelDesc'>{data.desc}
                     </p>
                     </div>
                <div className="hotelDetailsPrice">
                    <h1>Perfect for a {days} night stay!</h1>
                    <span>Located in the real heart of mumbai this property has
                        a excellent location score of 9.8  </span>
                        <h2>
                            <b>Rs {days * data.cheapestPrice * options.room}</b>  ({days}nights)
                        </h2>
                        <button onClick={handleClick}>Reserve or Book Now !</button>
                </div>
            </div>
        </div>
        <MailList/>
        <Footer/>
      </div>)}
      {openModel && <Reserve setOpen={setOpenModel} hotelId={id} /> }
    </div>
  )
}

export default Hotel
