import React from 'react'
import './style.scss'

import userDp from '../../assets/Icons/profile.png'

const Navbar = () => {
  return (
    <>
      <header className='header'>
        <div className="logo">
          <h1 className="logo-txt">TrackSpace</h1>
        </div>

        <div className="search-bar-cnt">
          <div className='searchIco'></div>
          <input type="text" name="search" id="search" className='searchBox' placeholder='Search Task'/>
        </div>

        <div className="usr-prfl">
            <div className="pic">
              <img className='usr-dp' src={userDp} alt="" />
            </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
