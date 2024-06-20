import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logout from '../authentic/logout';

function Header() {

    const authStatus = useSelector((state)=> state.status)
    console.log(authStatus);

    const items = [
        { 
            id: 1,
            name: 'Home',
            link: '/',
            authentication: authStatus
        },

        {
            id: 2,
            name: 'About',
            link: '/about',
            authentication: authStatus
        },

        {
            id: 3,
            name: 'Contact',
            link: '/contact',
            authentication: authStatus
        },

        {
            id:4,
            name: 'Sign Up',
            link: '/signup',
            authentication: !authStatus
        },

        {
            id:5,
            name: 'Login',
            link: '/login',
            authentication: !authStatus
        },
                
    ]

  return (
    <>
    <nav className="flex justify-between text-white bg-[#222327f9] p-4">
        <div>
            <Link to='/'>
                <div>Logo</div>
            </Link>
        </div>

        <div className='flex gap-7'>
            {items.map((item)=>(
               item.authentication && <div key={item.id}>
                    <Link to={item.link}>{item.name}</Link>
                </div>
            ))}
        {authStatus && <Logout/>}
        </div>
    </nav>
    </>
  )
}

export default Header