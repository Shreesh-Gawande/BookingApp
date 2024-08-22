import React from 'react'
import "./mailList.css"

function MailList() {
  return (
    <div className='mail'>
      <h1 className="mailTitle">Save Time, save money!</h1>
      <span className="mailDesc">Sign up ans we'll send the best deals to you</span>
      <div className="mailInputCointaner">
        <input type="text" placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
