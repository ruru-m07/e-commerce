import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logout from '../authentic/logout';
// import profile from '../../../public'
import { Controller, useForm } from 'react-hook-form';

function Header() {

    const authStatus = useSelector((state) => state.auth.status)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    // const [loading, setLoading] = useState(false)
    const userData = useSelector((state) => state.auth.userData)
    const [toggleProfile, setToggleProfile] = useState(false)
    const isUserLocal = localStorage.getItem("user")
    const isUser = JSON.parse(isUserLocal)
    const [user, setUser] = useState(isUser)
    const [namefirstLatter, setNamefirstLetter] = useState("")

    const items = [
        {
            id: 1,
            name: 'Shop',
            link: '/',
            authentication: isUser
        },
        {
            id: 2,
            name: 'About',
            link: '/about',
            authentication: isUser
        },

        {
            id: 3,
            name: 'Contact',
            link: '/contact',
            authentication: isUser
        },

        // {
        //     id: 5,
        //     name: 'Login',
        //     link: '/login',
        //     authentication: !authStatus
        // },
        {
            id: 6,
            name: 'Categories',
            link: '/category',
            authentication: isUser
        },

    ]

    useEffect(() => {
        function makeProfile() {
            if (userData) {
                setUser(userData);
            }

            if (user) {
                const username = user.username;
                const userFirstName = username.charAt(0);
                setNamefirstLetter(userFirstName);
            }
        }

        makeProfile();
    }, [userData, user]);

    function toggleProfileInfo(params) {
        setToggleProfile(!toggleProfile)

        // const body = document.body
    }

    document.addEventListener("click", (e) => {
        if (toggleProfile && !e.target.closest("#profile")) {
            setToggleProfile(false)
        }
    })

    // useEffect(() => {
    //     makeProfile();
    // })

    return (
        <>
            <nav className="flex justify-between text-lg text-[#000] bg-[#fffffff9] p-7 px-10 sticky">
                <div>
                    <Link to='/'>
                        <div className='font-playwriteRegular font-bold text-[26px]'>Morlex</div>
                    </Link>
                </div>


                <div className='flex gap-7'>
                    {items.map((item) => (
                        isUser &&
                        <div key={item.id}>

                            <div className='flex gap-3 items-center'>
                                <p><Link className='roboto-medium' to={item.link}>{item.name}</Link></p>
                            </div>
                        </div>
                    ))}
                </div>

                {!isUser &&
                    <Link to="/login"><img src="/profile.svg" alt="" srcSet="" /></Link>
                }

                {isUser &&

                    <div>

                        <div className='flex gap-4'>

                            {user && user.role == "ADMIN" ? <div>
                                <Link to="/add-products">
                                    Add products
                                </Link>
                            </div> : null}

                            <div id='profile'>

                                <button id='profile-icon' onClick={toggleProfileInfo} className='flex relative items-center gap-1 ml-[67px]'>
                                    <div className='flex items-center bg-[#1f82e5] w-[26px] h-[25px] text-white justify-center rounded-full text-[18px]'>
                                        {namefirstLatter}
                                    </div>

                                    <img src="/dropDown.svg" alt="" srcSet="" />
                                </button>

                                {toggleProfile && <div className='flex absolute flex-col ml-[-18px] gap-2 border-[1px] border-[#4e4e4e] w-[8rem] bg-slate-50 mt-2 p-[0.5rem]'>
                                    {/* <div>lol</div> */}
                                    <div><Logout /></div>
                                </div>}

                            </div>

                            <div>
                                <button>
                                    <img src="/cart.svg" alt="" srcSet="" />
                                </button>
                            </div>
                        </div>

                    </div>
                }
            </nav>
        </>
    )
}

export default Header