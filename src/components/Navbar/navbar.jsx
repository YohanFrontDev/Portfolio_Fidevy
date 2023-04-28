import React from 'react'

import Logo from './../../assets/LOGO.png'

import { Link } from 'react-router-dom'

export default function navbar() {
  return (
        <nav className='header_navbar flex flex-row bg-gray-800 text-gray-100  p-4 items-center'>
            <Link className='basis-1/4 flex flex-column justify-center hover:text-teal-600 w-1/2' to="/">
                <img className=""src={Logo} alt="" />
                <span className=''>fydev</span>
            </Link>
            <Link className='basis-1/4 hover:text-teal-600 w-24 ...' to="/contact">
                <h3 className='' >Contact</h3>
            </Link>
            <Link className='basis-1/4 hover:text-teal-600' to="/infos">
                <h3 className=''>Infos</h3>
            </Link>
            <Link className='basis-1/4 hover:text-teal-600' to="/tutoriels">
                <h3 className=''>Tutoriels</h3>
            </Link>
        </nav>  )
}
