import React, { useContext } from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';
function Navbar() {

  const { users} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className='navCointaner'>
        <Link to="/" style={{color:"inherit", textDecoration:"none"}} >
        <span className='logo'>BookNStays</span>
        </Link>
        
        {users ? users.username : (<div className="navItems">
           <Link to="/signin"> <button className="navButton">Register</button></Link>
           <Link to="/login"><button className="navButton">Login</button></Link> 
        </div>)}
      </div>
    </div>
  )
}

export default Navbar
