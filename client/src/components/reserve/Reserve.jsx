import "./reserve.css"
import {  faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext';

function Reserve({setOpen, hotelId}) {
    const [selectedRooms,setSelectedRooms]=useState([]);
    const {dateRange}=useContext(SearchContext);
    const {data,loading,error}=useFetch(`http://localhost:8800/api/hotels/room/${hotelId}`);

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
    
        const date = new Date(start.getTime());
    
        const dates = [];
    
        while (date <= end) {
          dates.push(new Date(date).getTime());
          date.setDate(date.getDate() + 1);
        }
    
        return dates;
      };
      console.log(dateRange);
      
   

    const handelSelect =(e)=>{
        const checked =e.target.checked;
        const value =e.target.value;
        setSelectedRooms(
            checked
            ? [...selectedRooms,value]
            :selectedRooms.filter((item)=>item !==value)
        );
    }
    const handleClick =()=>{

    }
  return (
    <div className='reserve'>
      <div className="rContainer">
        <FontAwesomeIcon
        icon={faCircleXmark}
        className='rClose'
        onClick={()=>setOpen(false)}/>
        <span>Select tour rooms:</span>
        {data.map((item)=>(
            <div className="rItem">
                <div className="rItemInfo">
                    <div className="rTitle">{item.title}</div>
                    <div className="rDesc">{item.desc}</div>
                    <div className="rMax">Max People: <b>{item.maxPeople}</b></div>
                    <div className="rPrice">{item.price}</div>
                </div>
                <div className="rselectRooms">
                {item.roomNumbers.map((roomNumber)=>(
                    <div className="room">
                    <label>{roomNumber.number}</label>
                    <input type='checkbox' value={roomNumber._id} onChange={handelSelect} />
                    </div>
                ))}
                </div>
            </div>
        ))}
        <button onClick={handleClick} className='rButton'>Reserve Now!</button>
      </div>

    </div>
  )
}

export default Reserve
