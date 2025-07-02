import React from 'react'
import './style.scss'

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

        <a href="#" aria-label='Setting Button' className='set-ico-a'>
          <span className='set-ico'></span>
        </a>
      </header>
    </>
  )
}

export default Navbar
