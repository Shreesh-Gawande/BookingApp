import React from 'react'
import "./list.css"
import Navbar from '../../components/navbar/Navbar.jsx'
import Heading from '../../components/heading/Heading.jsx'

function List() {
  return (
    <div>
     <Navbar/>
     <Heading type="list"/>
     <div className="listCointaner">
      <div className="listWrapper">
        <div className="listSearch">
           <h1 className="lsTitle">Search</h1>
           <div className="lsItem">
            
           </div>
        </div>
        <div className="listResult">

        </div>
      </div>
     </div>
    </div>
  )
}

export default List
