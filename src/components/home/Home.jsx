import React, { useEffect, useReducer, useState } from 'react'
import { getAllProducts } from '../../FetchFunc/fetchEcommerceApi'
import { products as storeProducts } from '../../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Home() {

  // const userStatus = useSelector((state) => state.auth.status)
  const userData = useSelector((state) => state.auth.userData)
  const isUserLocal = localStorage.getItem("user")
  const isUser = JSON.parse(isUserLocal)
  const [user, setUser] = useState(isUser)
  const [products, setProducts] = useState(null)
  const dispatch = useDispatch()

  async function fetch() {
    const products = await getAllProducts()
    if (products) {
      const allProducts = (products.data.data.products);
      dispatch(storeProducts(allProducts))
      setProducts(allProducts)
    }
  }

  async function userFromLocal() {
    if (!isUser) {
      setUser(userData)
    }
  }

  useEffect(() => {
    userFromLocal()
  })


  useEffect(() => {
    fetch()
  }, [])

  return <>
    {user ? (
      <div className=''>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
              {products && products.map((product) => (
                <Link key={product._id} to={`/product/${product._id}`}>
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.mainImage.url}
                        alt="mainImage"
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                      </div>

                    </div>
                    <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
                    {isUser && <div>
                      <button>Add to Cart</button>
                    </div>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Find Your Ideal Bag for Any Occasion</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Discover the perfect bag for every occasion in our curated collection. From chic clutches to versatile totes, find your style match today!</p>
            <Link to="/login" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Log in
              <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="./bag3.png" alt="mockup" />
          </div>
        </div>
      </section>
    )}

  </>
}

export default Home