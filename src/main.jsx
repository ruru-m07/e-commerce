import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/index.js'
import {Signup_page,Login_page} from './pages/index_page.js'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import DeleteDb from './components/DeleteDb.jsx'
// import Verification from './components/verification/Verification.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },

      {
        path: '/about',
        element: <div>about</div>
      },

      // {
      //   path: '/verification',
      //   element: <Verification/>
      // },

      {
        path: '/login',
        element: <Login_page/>
      },

      {
        path: '/Signup',
        element: <Signup_page/>
      },
      {
        path: '/deleteDB',
        element: <DeleteDb/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
