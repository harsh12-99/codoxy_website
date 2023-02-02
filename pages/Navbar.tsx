import { AppBar } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <AppBar sx={{background:"white"}}>
  <div className="container ml-20 flex flex-row justify-between p-5 flex-col md:flex-row items-center w-full">
    <a className="flex font-bold items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-4xl text-sky-900">Codoxy</span>
    </a>
    <ul className="md:ml-auto flex justify-between   items-center ">
      <li className='text-lg font-semibold text-gray-600 '>
        <Link href="" className=' hover:text-sky-900 border-2 px-4 py-2 rounded-full  border-transparent hover:border-sky-900 hover:shadow-xl ' >Home</Link>
      </li>
      <li className='text-lg font-semibold text-gray-600 '>
        <Link href="" className=' hover:text-sky-900 border-2 px-4 py-2 rounded-full  border-transparent hover:border-sky-900 hover:shadow-xl' >About Us</Link>
      </li>
      <li className='text-lg font-semibold text-gray-600 '>
        <Link href="" className=' hover:text-sky-900 border-2 px-4 py-2 rounded-full  border-transparent hover:border-sky-900 hover:shadow-xl' >Services</Link>
      </li>
      <li className='text-lg font-semibold text-gray-600 '>
        <Link href="" className=' hover:text-sky-900 border-2 px-4 py-2 rounded-full  border-transparent hover:border-sky-900 hover:shadow-xl' >Clients</Link>
      </li>
      <li className='text-lg font-semibold text-gray-600 '>
        <Link href="" className=' hover:text-sky-900 border-2 px-4 py-2 rounded-full  border-transparent hover:border-sky-900 hover:shadow-xl' >Contact Us</Link>
      </li>
      <li className='text-lg font-semibold text-gray-600 '>
        <Link href="" className='hover:text-sky-900 border-2 px-4 py-2 rounded-full  border-transparent hover:border-sky-900 hover:shadow-xl' > Brochures</Link>
      </li>
      
    </ul>
    
  </div>
</AppBar>
  )
}

export default Navbar