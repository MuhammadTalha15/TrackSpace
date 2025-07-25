import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Sidebar = () => {

  return (
    <>
      <aside className='sd-bar'>
        <nav className='side-nav'>
          <Link className='side-bar-link hm-wl' aria-label='Home' to="/"> <span className='link-ico hm'></span></Link>
          <Link className='side-bar-link tsk-wl' aria-label='Tasks' to="/Tasks"> <span className='link-ico tsk'></span></Link>
          <Link className='side-bar-link cmplt-wl' aria-label='Todo' to="/Completed"> <span className='link-ico cmplt'></span></Link>
          <Link className='side-bar-link imp-wl' aria-label='Important' to="#"> <span className='link-ico imp'></span></Link>
          <Link className='side-bar-link del-wl' aria-label='Deleted' to="/Deleted"> <span className='link-ico del'></span></Link>
        </nav>

        <a href="#" aria-label='Setting Button' className='set-ico-a'>
          <span className='set-ico'></span>
        </a>
      </aside>
    </>
  )
}

export default Sidebar
