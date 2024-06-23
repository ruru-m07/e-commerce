import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logout from '../authentic/logout';
// import profile from '../../../public'
import { Controller,useForm } from 'react-hook-form';

function Header() {

    const authStatus = useSelector((state) => state.status)
    const user = useSelector((state) => state.userData)
    const [toggleProfile, setToggleProfile] = useState(false)
    // console.log(authStatus);

    const [namefirstLatter, setNamefirstLatter] = useState("")

    const items = [
        {
            id: 1,
            name: 'Shop',
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
            id: 5,
            name: 'Login',
            link: '/login',
            authentication: !authStatus
        },

        // {
        //     id: 6,
        //     name: 'Add product',
        //     link: '/add-product',
        //     authentication: authStatus
        // },

    ]

    function makeProfile(params) {
        if (user) {
            const username = user.username;
            const userFirstName = username.split("")[0]
            setNamefirstLatter(userFirstName)
        }
    }

    function toggleProfileInfo(params) {
        setToggleProfile(!toggleProfile)

        // const body = document.body
    }

    document.addEventListener("click", (e) => {
        if (toggleProfile && !e.target.closest("#profile")) {
            setToggleProfile(false)
        }
    })

    useEffect(() => {
        makeProfile();
    })



    return (
        <>
            <nav className="flex justify-between text-lg text-[#000] bg-[#fffffff9] p-7 pb-10 px-10 sticky">
                <div>
                    <Link to='/'>
                        <div className='font-playwriteRegular font-bold text-[26px]'>Morlex</div>
                    </Link>
                </div>


                <div className='flex gap-7'>
                    {items.map((item) => (
                        item.authentication &&
                        <div key={item.id}>

                            <div className='flex gap-3 items-center'>
                                {!authStatus &&
                                    <Link to="/login"><img src="/profile.svg" alt="" srcSet="" /></Link>
                                }
                                <p><Link to={item.link}>{item.name}</Link></p>
                            </div>
                        </div>
                    ))}
                </div>

                {authStatus &&

                    <div>

                        <div className='flex gap-4'>

                            <div>
                                <Link to="/add-products">
                                Add products
                                </Link>
                            </div>

                            <div id='profile'>

                                <button id='profile-icon' onClick={toggleProfileInfo} className='flex relative items-center gap-1 ml-[67px]'>
                                    <div className='flex items-center bg-[#1f82e5] w-[26px] h-[25px] text-white justify-center rounded-full text-[18px]'>{namefirstLatter}</div>

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