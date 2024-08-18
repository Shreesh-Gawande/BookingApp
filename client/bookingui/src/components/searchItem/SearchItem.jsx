import React from 'react'
import "./searchItem.css"

function SearchItem() {
  return (
    <div className='searchItem'>
     <img src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" 
     alt="search_image" 
     className="searchImg" />
     <div className="siDesc">
        <h1 className="siTitle">Tower Streets Apartment</h1>
        <span className="siDistance">%00m from center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubtitle">
            Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
            Entire Studio 1bathroom full bed
        </span>
        <span className="siCancelOp">Free Cancelation</span>
        <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
        </span>
     </div>
     <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">Rs 2300</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <button className="siCheckButton">See availablity</button>
      </div>
     </div>
    </div>
  )
}

export default SearchItem
