import React, { memo } from 'react'


const Navbar = memo(({totalCount}) => {
    return (
      <div className="navbar">
        <i className="navbar-logo fa-solid fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{totalCount}</span>
      </div>
    ) 
  } 
)

export default Navbar;


