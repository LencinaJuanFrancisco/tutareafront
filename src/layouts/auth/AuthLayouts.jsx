import React from 'react'
import {Outlet} from 'react-router-dom'

const AuthLayouts = () => {
  return (
    <div className='bg-gray-100 p-6 min-h-screen flex items-center justify-center'> 
        <Outlet></Outlet>
    </div>
  )
}

export default AuthLayouts