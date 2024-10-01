import React from 'react'

function Signin() {
  return (
    <div>
      <form action="/api/auth/register" method='post'>
       <div>
        <label>Username</label>
        <input type='text'/>
        <label>Email</label>
        <input type='email'/>
        <label>Password</label>
        <input type='password'/>
        <label>Phone</label>
        <input type='number'/>
        <label>City</label>
        <input type='text'/>
        <label>Country</label>
        <input type='text'/>
       </div>
      </form>
    </div>
  )
}

export default Signin
