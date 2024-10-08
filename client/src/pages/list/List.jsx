import React, { useState } from 'react'
import "./list.css"
import Navbar from '../../components/navbar/Navbar.jsx'
import Heading from '../../components/heading/Heading.jsx'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem.jsx'
import useFetch from "../../hooks/useFetch";

function List() {
  const location=useLocation()
  const [destination,setDestination]=useState(location.state.destination);
  const [openDate,setOpenDate]=useState(false)
  const [dateRange,setDateRange]=useState(location.state.dateRange  );
  const [options,setOptions]=useState(location.state.options);
  const [min,setMin]=useState(undefined);
  const [max,setMax]=useState(undefined);
  
const {data, loading, error, reFetch}=useFetch(`http://localhost:8800/api/hotels?city=${destination}&min=${min || 0}&max=${max ||9999999}`)

const  handleClick =()=>{
reFetch();
}

  return (
    <div>
     <Navbar/>
     <Heading type="list"/>
     <div className="listCointaner">
      <div className="listWrapper">
        <div className="listSearch">
           <h1 className="lsTitle">Search</h1>
           <div className="lsItem">
           <label>Destination</label>
           <input placeholder={destination} type='text'/>
           </div>
           <div className="lsItem">
            <label>Check-in Date</label>
            <span onClick={()=>setOpenDate(!openDate)}>{`${format(dateRange.startDate, 'MM/dd/yyyy')} to ${format(dateRange.endDate, 'MM/dd/yyyy')}`}</span>
           {openDate && <DateRange onChange={(item)=>setDateRange([item.selection])}
             minDate={new Date()} 
             ranges={[dateRange]}/>}
             <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small></span>
                  <input type='number' onChange={e=>setMin(e.target.value)} className='lsOptionInput'/>
                
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small></span>
                  <input type='number'  onChange={e=>setMax(e.target.value)} className='lsOptionInput'/>
                
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Adult
                  </span>
                  <input type='number' min={1} className='lsOptionInput' placeholder={options.adult}/>
                
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                 Children</span>
                  <input type='number'min={0} className='lsOptionInput' placeholder={options.children}/>
                
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Rooms</span>
                  <input type='number'min={1} className='lsOptionInput' placeholder={options.room}/>
                
              </div>
              </div>
             </div>
           </div>
           <button onClick={handleClick}>Search</button>
        </div>
        <div className="listResult">
       {loading ? "loading" : <>
       {data.map(item=>(
        <SearchItem item={item} key={item}/>
      ))}
        </> 
       }
      
        </div>
      </div>
     </div>
    </div>
  )
}

export default List
