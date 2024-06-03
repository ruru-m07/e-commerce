import React from 'react'
import {Link} from 'react-router-dom'

function Header() {

    const items = [
        { 
            id: 1,
            name: 'Home',
            link: '/',
            authentication: true
        },

        {
            id: 2,
            name: 'About',
            link: '/about',
            authentication: true
        },

        {
            id: 3,
            name: 'Contact',
            link: '/contact',
            authentication: true
        },

        {
            id:4,
            name: 'Sign Up',
            link: '/signup',
            authentication: false
        },

        {
            id:5,
            name: 'Login',
            link: '/login',
            authentication: false
        },
                
    ]

  return (
    <>
    <nav className="flex justify-between text-white bg-[#622af1] p-4">
        <div>
            <Link to='/'>
                <div>Logo</div>
            </Link>
        </div>

        <div className='flex gap-7'>
            {items.map((item)=>(
               <div key={item.id}>
                    <Link to={item.link}>{item.name}</Link>
                </div>
            ))}
        </div>
    </nav>
    </>
  )
}

export default Header