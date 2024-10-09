import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className=''>
        <header className='bg-slate-100 text-black shadow-md'>
            <nav className='flex items-center justify-between p-4'>
                <Link to="/" className='w-full'>Home</Link>
                <div className='flex items-center gap-4'>
                <Link to="/login" className='hover:bg-red-500 p-2 hover:rounded-md hover:text-white duration-300'>Login</Link>
                <Link to="/register" className='hover:bg-lime-600 p-2 hover:rounded-md hover:text-white duration-300'>Register</Link>
                </div>
            </nav>
        </header>
        <main className='p-4'>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout;