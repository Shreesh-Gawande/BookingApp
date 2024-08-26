import React from 'react'
import "./searchItem.css"
import { Link } from 'react-router-dom'

function SearchItem({item}) {
  return (
    <div className='searchItem'>
     <img src={item.photos[0]}
     alt="search_image" 
     className="searchImg" />
     <div className="siDesc">
        <h1 className="siTitle">Tower Streets Apartment</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubtitle">
            Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
            {item.desc}
        </span>
        <span className="siCancelOp">Free Cancelation</span>
        <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
        </span>
     </div>
     <div className="siDetails">
    {item.rating &&  <div className="siRating">
        <span>Excellent</span>
        <button>{item.rating}</button>
      </div>}
      <div className="siDetailTexts">
        <span className="siPrice">Rs {item.cheapestPrice}</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <Link to={`/hotels/${item._id}`}>
        <button className="siCheckButton">See availablity</button>
        </Link>
      </div>
     </div>
    </div>
  )
}

export default SearchItem
