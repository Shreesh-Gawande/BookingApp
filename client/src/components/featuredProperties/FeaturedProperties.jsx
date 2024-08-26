import React from 'react'
import "./featuredProperties.css"
import useFetch from "../../hooks/useFetch";

function FeaturedProperties() {


  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels?featured=true&limit=4");

  return (
    <div className='fp'>
       {loading ? "Loading" : <>
    {data.map(item=>(<div key={item} className="fpItem">
      <img src={item.photos[0]} alt="" className="fpImage" />
      <span className="fpName">{item.name}</span>
      <span className="fpCity">{item.city}</span>
      <span className="fpPrice">Starting from Rs{item.cheapestPrice}</span>
      {item.Rating && <div className="fpRating">
        <button>{item.rating}</button>
        <span>Excellent</span>
      </div>}
      </div>
      ))  }
      
      </>}
    </div>
  )
}

export default FeaturedProperties
