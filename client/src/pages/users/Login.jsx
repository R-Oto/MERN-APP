import React from 'react'

const Login = () => {
  return (
    <section className='flex items-center justify-center min-h-screen'>
        <form className='shadow-md p-12'>
            <div className=''>
            <h1 className='text-center text-lg font-bold'>Login to your accaunt</h1>
            </div>
            <div className='pt-5'>
                <label>Email:</label><br />
                <input type="email" className='p-1 rounded-sm outline-none focus:bg-gray-50' autoFocus />
            </div>
            <div className='pt-5'>
                <label>Password:</label><br />
                <input type="password" className='p-1 rounded-sm outline-none focus:bg-gray-50' autoFocus />
            </div>
            <div className='text-center'>
                <button className="mt-4 p-1.5 px-5 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    Login
                </button>
            </div>
        </form>
    </section>
  )
}

export default Login;