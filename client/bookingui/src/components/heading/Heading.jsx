import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './heading.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDay, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { format } from 'date-fns';

function Heading() {
const [openDate,setOpenDate]=useState(false)



const [openOptions, setOpenOptions]=useState(false)
const [options,setOptions]=useState({
  adult:1,
  childern:0,
  room:1
})
const habdleOption =(name,operation)=>{
  setOptions(prev=>{return{
    ...prev , 
    [name]: operation ==="i" ? options[name] + 1 : options[name] -1,}})
}

  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
  };

  return (
    <div className='header'>
      <div className="headerCointaner">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} /> 
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} /> 
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} /> 
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} /> 
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} /> 
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
        <p className="headerDesc">
          Get Rewards for Your Travel- unlock instant savings of 10% or more
          with a free BoockNStay account
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className='headerIcon'/>
            <input
              type='text'
              placeholder='Where are you going'
              className='headerSectionInput'
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDay} className='headerIcon'/>
            <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>
              {`${format(dateRange.startDate, 'MM/dd/yyyy')} to ${format(dateRange.endDate, 'MM/dd/yyyy')}`}
            </span>
           {openDate && <DateRangePicker
              ranges={[dateRange]}
              onChange={handleSelect}
              className='date'
            />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
            <span  onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.childern} children . ${options.room} room`}</span>
        { openOptions&&  <div className="options"
       >
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                <button className="optionCounterButton" disabled={options.adult <=1} onClick={()=>habdleOption("adult","d")}>-</button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button className="optionCounterButton"onClick={()=>habdleOption("adult","i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                <button className="optionCounterButton" disabled={options.childern <=0} onClick={()=>habdleOption("childern","d")}>-</button>
                <span className="optionCounterNumber">{options.childern}</span>
                <button className="optionCounterButton"onClick={()=>habdleOption("childern","i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                <button className="optionCounterButton" disabled={options.room <=1} onClick={()=>habdleOption("room","d")}>-</button>
                <span className="optionCounterNumber">{options.room}</span>
                <button className="optionCounterButton"onClick={()=>habdleOption("room","i")}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Heading />, document.getElementById('root'));

export default Heading;
