import React from 'react'
import icon from '../icon.jpg'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex border space-x-3 items-center pl-1.5 py-2'>
      <img src={icon} className='w-[50px]'></img>
      <Link to='movies' className='text-blue-500 text-2xl font-bold'>Movies</Link>
      {/* <link */}
      <Link to="watchlist" className='text-blue-500 text-2xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar
